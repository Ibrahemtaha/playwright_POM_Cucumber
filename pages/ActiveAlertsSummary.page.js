exports.ActiveAlertsSuammry = class ActiveAlertsSuammry {

    constructor(page) {

        this.page = page
        /// Remove Widget

        /// Add Widget
        this.addWidgetButton        = page.frameLocator('iframe[title="dashboard module"]').locator('am-dashboard-toolbar').getByRole('button', { name: 'Add widget' })
        // this.addWidgetButton        = page.frameLocator('iframe[title="dashboard module"]').locator("//button[@title=' Add widget '][@class='am-button am-button_variant_ghost qa-button']")
        this.searchWdiget           = page.frameLocator('iframe[title="dashboard module"]').getByPlaceholder('Search')
        this.addWidgetFromList      = page.frameLocator('iframe[title="dashboard module"]').locator('am-dialog-content').getByText('Active alerts summary')
        
        /// Remove widget
    }

    async removeWidget(){
        console.log(123)
    }


    async addWidget(widgetName){
        console.log("before addWidgetButton")
        // await this.addWidgetButton  WiatforSelector
        await this.addWidgetButton.click()
        await this.searchWdiget.click()
        await this.searchWdiget.fill(widgetName)
        await this.addWidgetFromList.click()

    }

    async MoveWidget(){
        console.log(456)
    }

}