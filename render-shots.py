import asyncio, os
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        ctx = await b.new_context(viewport={'width': 360, 'height': 640}, device_scale_factor=3, color_scheme='light')
        pg = await ctx.new_page(); errs = []; pg.on('pageerror', lambda e: errs.append(str(e)))
        await pg.goto('file://' + os.path.abspath('www/index.html')); await pg.evaluate('document.fonts.ready')
        await pg.fill('#uname', 'av_deniz')
        for c in ['#c-notice', '#c-terms', '#c-age']: await pg.check(c)
        await pg.screenshot(path='store/shot-1-giris.png')
        await pg.click('#gbtn')
        # puan için bir dosya oyna
        await pg.click('.case[data-id=c1]'); await pg.click('#go')
        steps = await pg.evaluate("CASES.find(c=>c.id==='c1').steps.map(s=>s.o[s.a])")
        for t in steps:
            await pg.wait_for_timeout(1500); await pg.locator('.opt', has_text=t).first.click(); await pg.click('#next')
        await pg.click('#again')
        await pg.evaluate('window.scrollTo(0,0)'); await pg.screenshot(path='store/shot-2-ana.png')
        await pg.click('#br button[data-k=is]'); await pg.click('.case[data-id=i1]')
        await pg.screenshot(path='store/shot-3-dosya.png')
        await pg.click('#go'); await pg.wait_for_timeout(3600)
        await pg.screenshot(path='store/shot-4-karar.png')
        t = await pg.evaluate("CASES.find(c=>c.id==='i1').steps[0].o[CASES.find(c=>c.id==='i1').steps[0].a]")
        await pg.locator('.opt', has_text=t).first.click(); await pg.wait_for_timeout(300)
        await pg.evaluate("document.querySelector('.verdict').scrollIntoView({block:'end'})")
        await pg.screenshot(path='store/shot-5-gerekce.png')
        await pg.evaluate("window.celseBack()")
        await pg.click('[data-tab=kaynaklar]'); await pg.screenshot(path='store/shot-6-kaynaklar.png')
        print('errors', errs)
        await b.close()
asyncio.run(main())
