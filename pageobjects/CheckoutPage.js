
class CheckoutPage
{
    constructor(page,productName)
    {
      this.page = page;
     this.bool=page.locator("h3:has-text('"+productName+"')");
     this.checkoutButton=page.locator("text=Checkout");
     this.selectCountry=page.locator("[placeholder='Select Country']");
     this.dropdownResults =page.locator(".ta-results");
     this.placeOrderButton=page.locator(".action__submit")
     this.VerifyUserName=page.locator(".user__name");
     this.ThankYouMsg=page.locator(".hero-primary");
     this.orderid=page.locator(".em-spacer-1 .ng-star-inserted");
    }
    async checkoutPageOperations()
    {
await this.page.locator("div li").first().waitFor();
await this.checkoutButton.click();
await this.selectCountry.pressSequentially('Ind');
await this.dropdownResults.waitFor();
const optionsCount =await this.dropdownResults.locator("button").count();
for(let i=0;i<optionsCount;i++)
{
   const text=await this.dropdownResults.locator("button").nth(i).textContent();
   if(text.trim()=="Indonesia") 
   {
    await this.dropdownResults.locator("button").nth(i).click();
    break;
   }
}

    }
    async placeorerbutton(){
await this.placeOrderButton.click();
    }
   getProductLocator(productName) {
    return this.bool;
}
confirmUserName(){
return this.VerifyUserName;
}
confirmThankYouMsg(){
    return this.ThankYouMsg;
}
confirmOrderID(){
    return this.orderid;
}
async getOrderID() {
  const text = await this.orderid.textContent();
  return text.replace(/\|/g, '').trim();
}
}
module.exports={CheckoutPage}