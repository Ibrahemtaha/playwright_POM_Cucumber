const { test, expect } = require('@playwright/test');
const browser = await chromium.launch();

test.beforeAll('Login Test', async ({}) => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://mc-vz7test20.do.acronis.fun/login');
      // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Login/);

  await page.getByRole('textbox', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Login' }).fill('ibrahem12');
  await page.locator('[data-test-id="login-form-button\\.next"]').click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('123qweASD!@#$');
  await page.locator('[data-test-id="login-form-button\\.next"]').click();
    //await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Cyber Protection' }).click();
  await page.goto('https://mc-vz7test20.do.acronis.fun/ui/#/dashboards');  // try to REMOVE\Comment that line
  await page.getByRole('menuitem', { name: 'Overview' }).getByText('Overview').click();
});

// Close all 
test.afterAll(async () => {
  await page.close();
});

test.describe('All Active Alerts summary widget tests', () => {


    test('Remove Active Alerts summary widget', async () => {
  // remove Active Alerts summary widget
  //   await page.frameLocator('iframe[title="dashboard module"]').getByRole('button', { name: 'Delete' }).click();
      const ActiveAlertSummaryDisplayed = await page.frameLocator('iframe[title="dashboard module"]').locator("(//div[contains(@title, 'Active alerts summary')])[1]")
  // console.log(ActiveAlertSummaryDisplayed.textContent())
      if (ActiveAlertSummaryDisplayed) {
          console.log("Inside IF")
          await ActiveAlertSummaryDisplayed.click(); 
          console.log("Clicked")
          const deleteFirstButton = await page.frameLocator('iframe[title="dashboard module"]').locator("//div[contains(@title, 'Active alerts summary')]//following-sibling::div//button[@title = 'Delete']").first()
          await deleteFirstButton.click();
      // .getByRole('button', { name: 'Delete' })
          console.log("Deleted widget")
  } 
    });

    test('Add Widget', async () => {
  // Add widget 
      await page.frameLocator('iframe[title="dashboard module"]').locator('am-dashboard-toolbar').getByRole('button', { name: 'Add widget' }).click();
      await page.frameLocator('iframe[title="dashboard module"]').getByPlaceholder('Search').click(); 
      await page.frameLocator('iframe[title="dashboard module"]').getByPlaceholder('Search').fill('active alerts summary');
      await page.frameLocator('iframe[title="dashboard module"]').locator('am-dialog-content').getByText('Active alerts summary').click();
  });


});


// 1) If statement cuz widget might not be in UI - Added 
// 2) what if we had 2 widgets of same 

//V Describe +  -- min 18 https://www.youtube.com/watch?v=S3NVJo0ySwE&list=PLhW3qG5bs-L9sJKoT1LC5grGT77sfW0Z8&index=11
//V Devide into different tests

//1)  Hooks = Beforeall for Login -- Previous link after 18 +    Error, need to fix beforeall, 
    //according to next video, it's a Typescript video -- need to remove page from all tests
    // min 6  https://www.youtube.com/watch?v=DHsAm12trBA

//2)  try to REMOVE\Comment that line 22 cuz there's a click ---  await page.goto('https://mc-vz7test20.do.acronis.fun/ui/#/dashboards'); 

//3)  POM Login 
// POM Frameword - + login one page alone -
    // https://www.youtube.com/watch?v=rAec3mZFhF0&list=PLhW3qG5bs-L9sJKoT1LC5grGT77sfW0Z8&index=13
    // https://www.lambdatest.com/learning-hub/playwright-page-object-model
    

  // All sorts of assertion   https://www.youtube.com/watch?v=hYNOFle3zic&list=PLhW3qG5bs-L9sJKoT1LC5grGT77sfW0Z8&index=9&pp=iAQB
    
  // Gherkin Framework https://medium.com/@manabie/how-to-use-playwright-in-cucumberjs-f8ee5b89bccc
  // Allure
    
  // Antoations & Tags @Smoke \ @Regression: 
  //https://www.youtube.com/watch?v=9dSRZ-oswlM&list=PLhW3qG5bs-L9sJKoT1LC5grGT77sfW0Z8&index=12
    
  // playwright Mock Networking API 