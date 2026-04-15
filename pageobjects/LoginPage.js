class LoginPage{
    constructor(page){
        this.page=page;
        this.signInbutton=page.locator('#login');
        this.UserName=page.locator('#userEmail');
        this.Password=page.locator("[formcontrolname='userPassword']");

    }
    async goTo()
    {
        await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }
    async validLogin(username,password){
        await this.UserName.fill(username);
        await this.Password.fill(password);
        await this.signInbutton.click();

    }
}
module.exports={LoginPage}