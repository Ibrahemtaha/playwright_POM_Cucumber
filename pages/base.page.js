exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.username_input         = page.getByRole('textbox', { name: 'Login' })
        this.next_button            = page.locator('[data-test-id="login-form-button\\.next"]')
        this.password_inupt         = page.getByRole('textbox', { name: 'Password' })
        this.login_button           = page.getByRole('button', { name: 'Login' })
        this.CyberProtection_button = page.getByRole('button', { name: 'Cyber Protection' })
        this.menuItem_overview      = page.getByRole('menuitem', { name: 'Overview' }).getByText('Overview')
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
    



}
