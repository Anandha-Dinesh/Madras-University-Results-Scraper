const puppeteer = require("puppeteer");


const scrape =  
    async (regno) => {
        
        let browser
        if(!browser) browser = await puppeteer.launch({
        headless: true 
        })
        const page = await browser.newPage()
        page.setJavaScriptEnabled(false)
        await page.setRequestInterception(true);
        page.on('request', (req) => {
            if(req.resourceType() === 'stylesheet' || req.resourceType() === 'font' || req.resourceType() === 'image' || req.resourceType() === "script"){
                req.abort();
            }
            else {
                req.continue();
            }
        });
            await page.goto("https://result.unom.ac.in/results/", { waitUntil: ['networkidle2'] })
          

        await page.waitForSelector("input[name=regno]")
        
                        
        await page.type("input[name=regno]",regno)
        // await page.click("input[contains(text(),'Get Result' )]")
        await page.keyboard.press("Enter")

        await page.waitForNavigation({
            waitUntil: 'networkidle0',
        });

        const elements = await page.$$("span");
                        
        const dataarr = await Promise.all(elements.filter(async(element) =>{
            if (element.length == 0) {
                return true;
            }
            return false;
        }) 
        .map(async(element)=>{
            const text = await (await element.getProperty("innerText")).jsonValue();       
                return text.trim() ;
            }));
            Promise.all(dataarr)
                .then(function() {
                    
                    return dataarr ;  
                })
                await browser.close()
                return dataarr;
                                 
}

module.exports = scrape;
