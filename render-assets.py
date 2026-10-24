import asyncio, os, json, struct
from playwright.async_api import async_playwright
ROOT = os.path.abspath('.')
RES = 'android/app/src/main/res'
CLARET, CLARET_D, CREAM, BRASS = '#8e1b30', '#5e0f1f', '#f6efe3', '#d9a443'
FONTS = f'<link rel="stylesheet" href="file://{ROOT}/www/fonts/fonts.css">'

def glyph(size, pad_frac, shape, bg=True):
    # "C" harfi + altında pirinç renkli dosya çizgisi
    r = {'square': '0', 'round': '50%', 'squircle': '22%', 'none': '0'}[shape]
    g = size * (1 - 2 * pad_frac)
    return f'''<!doctype html><html><head>{FONTS}<style>
    html,body{{margin:0;width:{size}px;height:{size}px;background:transparent}}
    .b{{width:{size}px;height:{size}px;border-radius:{r};{'background:radial-gradient(circle at 30% 25%, #a8243d, '+CLARET+' 55%, '+CLARET_D+');' if bg else ''}display:grid;place-items:center;overflow:hidden}}
    .g{{width:{g}px;height:{g}px;position:relative}}
    .c{{position:absolute;left:0;right:0;top:{-g*0.04}px;text-align:center;font:700 {g*0.92}px/1 'Zilla Slab',serif;color:{CREAM};letter-spacing:-.02em}}
    .bar{{position:absolute;left:{g*0.26}px;right:{g*0.26}px;bottom:{g*0.08}px;height:{max(2,g*0.07)}px;border-radius:{g}px;background:{BRASS}}}
    </style></head><body><div class="b"><div class="g"><div class="c">C</div><div class="bar"></div></div></div></body></html>'''

def splash(w, h):
    s = min(w, h)
    return f'''<!doctype html><html><head>{FONTS}<style>
    html,body{{margin:0;width:{w}px;height:{h}px;background:{CLARET}}}
    .w{{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:{s*0.02}px}}
    .t{{font:700 {s*0.16}px/1 'Zilla Slab',serif;color:{CREAM}}} .t i{{font-style:normal;color:{BRASS}}}
    .s{{font:500 {s*0.028}px/1 'JetBrains Mono',monospace;letter-spacing:.2em;color:{CREAM};opacity:.8}}
    </style></head><body><div class="w"><div class="t">Cel<i>se</i></div><div class="s">HUKUK ARENASI</div></div></body></html>'''

def feature():
    return f'''<!doctype html><html><head>{FONTS}<style>
    html,body{{margin:0;width:1024px;height:500px;background:{CLARET}}}
    .w{{width:100%;height:100%;display:grid;grid-template-columns:1fr 300px;align-items:center;padding:0 64px;box-sizing:border-box;
       background:radial-gradient(circle at 85% 50%, #a8243d 0, {CLARET} 45%, {CLARET_D} 100%)}}
    .t{{font:700 112px/1 'Zilla Slab',serif;color:{CREAM}}} .t i{{font-style:normal;color:{BRASS}}}
    .s{{font:600 30px/1.25 'Public Sans',sans-serif;color:{CREAM};margin-top:18px;max-width:520px}}
    .k{{font:500 16px/1 'JetBrains Mono',monospace;letter-spacing:.18em;color:{CREAM};opacity:.75;margin-top:22px}}
    .clock{{width:220px;height:220px;justify-self:end;position:relative}}
    .clock svg{{width:220px;height:220px;transform:rotate(-90deg)}}
    .clock b{{position:absolute;inset:0;display:grid;place-items:center;font:700 72px/1 'JetBrains Mono',monospace;color:{CREAM}}}
    </style></head><body><div class="w"><div><div class="t">Cel<i>se</i></div>
    <div class="s">Dosyayı oku, 15 saniyede karar ver.</div>
    <div class="k">CEZA · İŞ · AİLE · İDARE · BORÇLAR · MİRAS</div></div>
    <div class="clock"><svg viewBox="0 0 84 84"><circle cx="42" cy="42" r="36" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="7"/><circle cx="42" cy="42" r="36" fill="none" stroke="{BRASS}" stroke-width="7" stroke-linecap="round" stroke-dasharray="226.2" stroke-dashoffset="62"/></svg><b>11</b></div>
    </div></body></html>'''

def png_size(path):
    d = open(path, 'rb').read(24); return struct.unpack('>II', d[16:24])

async def shot(pg, html, w, h, out, transparent=False):
    tmp = os.path.abspath('store/_tmp.html'); open(tmp, 'w').write(html)
    await pg.set_viewport_size({'width': w, 'height': h})
    await pg.goto('file://' + tmp); await pg.evaluate('document.fonts.ready')
    await pg.wait_for_timeout(150)
    await pg.screenshot(path=out, omit_background=transparent, clip={'x': 0, 'y': 0, 'width': w, 'height': h})

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(); pg = await b.new_page()
        for d, n in [('mdpi', 48), ('hdpi', 72), ('xhdpi', 96), ('xxhdpi', 144), ('xxxhdpi', 192)]:
            await shot(pg, glyph(n, .14, 'squircle'), n, n, f'{RES}/mipmap-{d}/ic_launcher.png', True)
            await shot(pg, glyph(n, .18, 'round'), n, n, f'{RES}/mipmap-{d}/ic_launcher_round.png', True)
            fg = n * 108 // 48
            await shot(pg, glyph(fg, .30, 'none', bg=False), fg, fg, f'{RES}/mipmap-{d}/ic_launcher_foreground.png', True)
        for root, _, files in os.walk(RES):
            if 'splash.png' in files:
                pth = os.path.join(root, 'splash.png'); w, h = png_size(pth)
                await shot(pg, splash(w, h), w, h, pth)
        await shot(pg, glyph(512, .12, 'square'), 512, 512, 'store/icon-512.png')
        await shot(pg, feature(), 1024, 500, 'store/feature-1024x500.png')
        await b.close()
asyncio.run(main())
os.remove('store/_tmp.html')
open(f'{RES}/values/ic_launcher_background.xml', 'w').write('<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">#8E1B30</color>\n</resources>\n')
print('done')
