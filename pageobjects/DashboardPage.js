class DashboardPage 
{
    constructor(page)
    {
    this.products=page.locator('.card-body');
    this.productsText= page.locator(".card-body b");
    this.cart= page.locator("[routerlink*='cart']");
    }

async  searchProductAddcart(productName)
{

    const titles=await this.productsText.allTextContents();
    console.log(titles); 
    //ZARA COAT 3
    const count =await this.products.count();
    for(let i=0;i<count;++i)
    {
    if(await this.products.nth(i).locator("b").textContent()===productName)
    {
        //add to cart 
        await this.products.nth(i).locator("text= Add To Cart").click();
    // await products.nth(i).locator("button:has-text('Add To Cart')").click();
        break;
    }
    } 
}
async navigateToCart()
{
    await this.cart.click();
}
}
module.exports={DashboardPage}
