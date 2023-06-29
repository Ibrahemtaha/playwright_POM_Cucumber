exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.username_input         = page.getByRole('textbox', { name: 'Login' })
        this.next_button            = page.locator('[data-test-id="login-form-button\\.next"]')
        this.password_inupt         = page.getByRole('textbox', { name: 'Password' })
        this.login_button           = page.getByRole('button', { name: 'Login' })
        this.CyberProtection_button = page.getByRole('button', { name: 'Cyber Protection' })
        this.menuItem_overview      = page.getByRole('menuitem', { name: 'Overview' }).getByText('Overview')

        //Remove widget
        this.ActiveAlertSummaryDisplayed = page.frameLocator('iframe[title="dashboard module"]').locator("(//div[contains(@title, 'Active alerts summary')])[1]")
        this. deleteFirstButton          = page.frameLocator('iframe[title="dashboard module"]').locator("//div[contains(@title, 'Active alerts summary')]//following-sibling::div//button[@title = 'Delete']").first()

        /// Add Widget
        this.addWidgetButton        = page.frameLocator('iframe[title="dashboard module"]').locator('am-dashboard-toolbar').getByRole('button', { name: 'Add widget' })
        // this.addWidgetButton        = page.frameLocator('iframe[title="dashboard module"]').locator("//button[@title=' Add widget '][@class='am-button am-button_variant_ghost qa-button']")
        this.searchWdiget           = page.frameLocator('iframe[title="dashboard module"]').getByPlaceholder('Search')
        this.addWidgetFromList      = page.frameLocator('iframe[title="dashboard module"]').locator('am-dialog-content').getByText('Active alerts summary')
    }

    async gotoLoginPage(){
        await this.page.goto('https://mc-vz7test20.do.acronis.fun/login');
    }

    async login(){
        await this.username_input.click()
        await this.username_input.fill('ibrahem12')
        await this.next_button.click()
        await this.password_inupt.click()
        await this.password_inupt.fill('123qweASD!@#$')
        await this.next_button.click()
    }

    async cyberProtectionPage(){
        await this.CyberProtection_button.click()
    }
    async menuItem_overviewButton(){
        await this.menuItem_overview.click()
    }
    
    // Remove Widget
    // async removeWidget(){
    //     if(await ActiveAlertSummaryDisplayed){
    //         await this.ActiveAlertSummaryDisplayed.click(); 
    //         await this.deleteFirstButton.click();
    //     }
    // }
    //  Add Widget
    async addWidget(widgetName){
        console.log("before addWidgetButton")
        // await this.addWidgetButton  WiatforSelector
        await this.addWidgetButton.click()
        await this.searchWdiget.click()
        await this.searchWdiget.fill(widgetName)
        await this.addWidgetFromList.click()

}


}
