const{LoginPage}=require('./LoginPage');
const{DashboardPage}=require('./DashboardPage');
const{CheckoutPage}=require('./CheckoutPage');
const{OrdersPage}=require('./OrdersPage');


class POManger {

constructor(page)
{
    this.page=page;
   this.loginPage=new LoginPage(this.page);
    this.dashboardPage=new DashboardPage(this.page);
    this.checkout = new CheckoutPage(this.page);
    this.orderspage = new OrdersPage(this.page);
}

getLoginPage()
{
    return this.loginPage;
}
getDashboardPage()
{
    return this.dashboardPage;
}
getcheckoutPage(productName) {
    return new CheckoutPage(this.page, productName);
}
getordersPage()
{
    return this.orderspage;
}

}
module.exports={POManger};