class LoginPage{
    constructor(page){
        this.page=page;//now we can use page everywere 
        this.signInbutton=page.locator('#login');
        this.UserName=page.locator('#userEmail');
        this.Password=page.locator("[formcontrolname='userPassword']");

    }
    async goTo()
    {
        await this.page.goto("https://rahulshettyacademy.com/client/");
    }
    async validLogin(username,password){//Method
        await this.UserName.fill(username);
        await this.Password.fill(password);
        await this.signInbutton.click();
          await this.page.waitForLoadState('networkidle');

    }
}
module.exports={LoginPage}