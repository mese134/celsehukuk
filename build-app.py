# Web oyununu (scratchpad/celse/celse.html) uygulama sürümüne çevirir: www/index.html + www/fonts
import re, os, shutil
SRC = '/tmp/claude-0/-home-claude/5cfba519-5895-5a72-9f2c-66c674c2ee69/scratchpad/celse/celse.html'
body = open(SRC).read()
gf = re.search(r'<link rel="preconnect" href="https://fonts.googleapis.com">\s*<link rel="stylesheet" href="https://fonts.googleapis.com/[^"]+">', body)
assert gf, 'google fonts link not found'
body = body.replace(gf.group(0), '<link rel="stylesheet" href="fonts/fonts.css">')
os.makedirs('www/fonts', exist_ok=True)
css = []
for fam, weights in [('zilla-slab', [500, 600, 700]), ('public-sans', [400, 500, 600, 700]), ('jetbrains-mono', [500, 700])]:
    for w in weights:
        c = open(f'node_modules/@fontsource/{fam}/{w}.css').read()
        blocks = re.findall(r'/\* ([\w-]+) \*/\s*(@font-face \{.*?\})', c, re.S)
        for name, blk in blocks:
            if not re.search(r'-latin(-ext)?-\d+-normal$', name): continue
            f = name + '.woff2'
            shutil.copy(f'node_modules/@fontsource/{fam}/files/{f}', f'www/fonts/{f}')
            blk = re.sub(r"src: [^;]+;", f"src: url({f}) format('woff2');", blk)
            css.append(blk)
open('www/fonts/fonts.css', 'w').write('\n'.join(css) + '\n')
head = ('<!doctype html><html lang="tr"><head><meta charset="utf-8">'
        '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
        '<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}'
        'body{margin:0;font:14px system-ui,-apple-system,sans-serif}img{max-width:100%}[hidden]{display:none!important}'
        'html,body{overscroll-behavior:none;-webkit-tap-highlight-color:transparent}</style>'
        '<script>window.CELSE_APP=true;</script></head><body>')
tail = '''<script>
(function(){
  var C = window.Capacitor, App = C && C.Plugins && C.Plugins.App;
  if (!App) return;
  App.addListener('backButton', function(){ if (!(window.celseBack && window.celseBack())) App.exitApp(); });
})();
</script></body></html>'''
open('www/index.html', 'w').write(head + body + tail)
print('www/index.html', os.path.getsize('www/index.html'), 'bytes;', len(css), 'font faces')
