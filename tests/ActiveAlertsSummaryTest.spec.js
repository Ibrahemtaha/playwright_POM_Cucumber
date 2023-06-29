const { test, expect } = require("@playwright/test");
const { chromium } = require("@playwright/test");
import {LoginPage} from '../pages/base.page'
import {ActiveAlertsSuammry} from '../pages/ActiveAlertsSummary.page'

// test.beforeAll(async () => {
//   const browser = await chromium.launch();
//   const page = await browser.newPage();
//   await page.goto("https://mc-vz7test20.do.acronis.fun/login");
// });
// Close all 
// test.afterAll(async () => {
//   await page.close();
// });
// test.beforeAll(async () => {
//   const browser = await chromium.launch();
//   const page = await browser.newPage();
//  await page.goto("https://mc-vz7test20.do.acronis.fun/login");
// });

test.describe('All Active Alerts summary widget tests', () => {

  test('Login Test and Active Alerts Summary Widget', async ({page}) => {

    // 1) Login
    const Login = new LoginPage(page)
    Login.gotoLoginPage()
    Login.login()
    Login.cyberProtectionPage()
    Login.menuItem_overviewButton()

    // 2) Remove Widget Active Alerts summary
      const ActiveAlertSummaryDisplayed = await page.frameLocator('iframe[title="dashboard module"]').locator("(//div[contains(@title, 'Active alerts summary')])[1]")
      if (ActiveAlertSummaryDisplayed) {
          console.log("Inside IF")
          await ActiveAlertSummaryDisplayed.click(); 
          console.log("Clicked")
          const deleteFirstButton = await page.frameLocator('iframe[title="dashboard module"]').locator("//div[contains(@title, 'Active alerts summary')]//following-sibling::div//button[@title = 'Delete']").first()
          await deleteFirstButton.click();
          console.log("Deleted widget")
        } 
    
    // 3) Add Widget Active Alerts summary 
    const ActiveAlertsSuammryAdd = new ActiveAlertsSuammry(page)
    ActiveAlertsSuammryAdd.addWidget('active alerts summary')

      // await page.frameLocator('iframe[title="dashboard module"]').locator('am-dashboard-toolbar').getByRole('button', { name: 'Add widget' }).click();
      // await page.frameLocator('iframe[title="dashboard module"]').getByPlaceholder('Search').click(); 
      // await page.frameLocator('iframe[title="dashboard module"]').getByPlaceholder('Search').fill('active alerts summary');
      // await page.frameLocator('iframe[title="dashboard module"]').locator('am-dialog-content').getByText('Active alerts summary').click();
  
    });


});


// 1) Fix Addwidget issue 
// 2) Remove widget to POM 
// Continue with 4 more tests, starting from Drag drop

// 1) If statement cuz widget might not be in UI - Added 
// 2) what if we had 2 widgets of same 

//V Describe +  -- min 18 https://www.youtube.com/watch?v=S3NVJo0ySwE&list=PLhW3qG5bs-L9sJKoT1LC5grGT77sfW0Z8&index=11
//V Devide into different tests

//1)  Hooks = Beforeall for Login -- Previous link after 18 +    Error, need to fix beforeall, 
    //according to next video, it's a Typescript video -- need to remove page from all tests
    // min 6  https://www.youtube.com/watch?v=DHsAm12trBA

//3)  POM Login 
// POM Frameword - + login one page alone -
    // https://www.youtube.com/watch?v=rAec3mZFhF0&list=PLhW3qG5bs-L9sJKoT1LC5grGT77sfW0Z8&index=13
    // https://www.lambdatest.com/learning-hub/playwright-page-object-model
    

  // All sorts of assertion   https://www.youtube.com/watch?v=hYNOFle3zic&list=PLhW3qG5bs-L9sJKoT1LC5grGT77sfW0Z8&index=9&pp=iAQB
    
  // Gherkin Framework https://medium.com/@manabie/how-to-use-playwright-in-cucumberjs-f8ee5b89bccc
  // Allure
    
  // Antoations & Tags @Smoke \ @Regression: 
  //https://www.youtube.com/watch?v=9dSRZ-oswlM&list=PLhW3qG5bs-L9sJKoT1LC5grGT77sfW0Z8&index=12
    
  // playwright Mock Networking api  
