const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const { executablePath } = require('puppeteer'); 

(async () => {
  const pathToExtension = require('path').join(__dirname, 'keplrex');
  puppeteer.use(StealthPlugin())
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`,
    ],
    executablePath: executablePath()
  });

  const [page] = await browser.pages()
  // переходим по указанному адресу
  
  function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

  await page.goto('https://iancoleman.io/bip39/')
  await page.waitForSelector(`.generate`, {timeout: 180000})
  await page.click("button.generate")
  await delay(2000);

  /* let mnem = await page.evaluate(() => {
    var mnem = document.querySelector('#phrase').value;
    return Promise.resolve(mnem);
  });  */
  
  await page.click("#phrase")
  await page.keyboard.down('Control');
  await page.keyboard.press('KeyA');
  await page.keyboard.press('KeyC');
  await page.keyboard.up('Control');
  
 
 await page.goto('chrome-extension://kfhfflkpngjflkimaaakldpajghfdjfi/popup.html#/register') 
 //console.log(mnem)
  
 await page.evaluate(() => {
    var btn3 = document.querySelectorAll('.btn-outline-primary');
    btn3[2].click();
    console.log(btn3)
    //return Promise.resolve(mnem);
  });
  
  await page.waitForSelector('.input-group')
  await page.click(".form-control-alternative")
  await page.keyboard.down('Control');
  await page.keyboard.press('KeyV');
  await page.keyboard.up('Control');
  await delay(1000);
  /* await page.$eval(mnem)('.input-group', e => e.innerText=mnem); */
  await page.evaluate(() => {
    var worlds = document.querySelectorAll("input");
    //console.log(mnem)
    /* for (let i = 0; i < 11; i++) { // выведет 0, затем 1, затем 2
        worlds[i].value=i;
      } */
      
      worlds[worlds.length-3].value=Math.random();
      worlds[worlds.length-2].value='tarab739';
      worlds[worlds.length-1].value='tarab739';
    //return Promise.resolve(mnem);
  }); 
  await delay(1000);
  await page.click(".btn-primary")
  
  await page.goto('https://faucet.marsprotocol.io/')
  await delay(7000); 
  await page.goto('https://faucet.marsprotocol.io/')
  await delay(7000);
  //const newPagePromise = new Promise(x => browser.once('targetcreated', target => x(target.page()))); 
  await page.waitForSelector(`.ConnectButton_button__0UGiY`, {timeout: 100000})
  //
  await page.click(".ConnectButton_button__0UGiY")
  //
  
  /* 
  const newPage = await target.page();
  const url = newPage.url();
  console.log(url)
  console.log(newPage)
  await newPage.waitForSelector(`.button-3TBml_JV7gtC6z7GWHCdbd`, {timeout: 100000})
  console.log('dojdalis')
  await newPage.click(".button-3TBml_JV7gtC6z7GWHCdbd")
  console.log('najal')  */
  //295 645
   browser.on('targetcreated', async (target) => { // данный блок перехватывает все новые события
    console.log(tar)
    if (target.type() === 'page') {               // и если это новая страница/вкладка
           const newPage = await target.page();      // то объявляем ее
           const url = newPage.url();                // например, смотрим её url
           console.log(url)
           console.log(newPage)
           await newPage.waitForSelector(`.button-3TBml_JV7gtC6z7GWHCdbd`, {timeout: 100000})
           await newPage.click(".button-3TBml_JV7gtC6z7GWHCdbd")
    }
  });
   
  

/*   await page.keyboard.down('Alt');
  await page.keyboard.press('KeyF4');
  await page.keyboard.up('Alt');
//keplr btn
//button-3TBml_JV7gtC6z7GWHCdbd
  await page.waitForSelector(`.ConnectButton_button__0UGiY`, {timeout: 100000})
  await page.click(".ConnectButton_button__0UGiY") */

  
  
  /* button-3TBml_JV7gtC6z7GWHCdbd btn btn-primary */
 /* await page.waitForSelector('.btn-outline-primary', e => e.innerHTML=='Import existing account')
 await page.click('.btn-outline-primary', e => e.innerHTML=='Import existing account') */
// ждем пока появится элемент с CSS селектором ".captcha-solver"
//await page.waitForSelector('.captcha-solver')
// кликаем по элементу с указанным селектором
//await page.click('.captcha-solver')
//mars1yv7gx5s34r0p25rnrkkxks52w6fu3q3anvdjuw
})();
