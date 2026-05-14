class OrdersPage{
    constructor(page){
this.page=page;
this.orderbtn=page.locator("button[routerlink='/dashboard/myorders']");
this.orderCompleteGrid=page.locator(".table-bordered tr");
this.OrderRows=page.locator(".ng-star-inserted tbody tr");
this.orderIDDetailsPageconfirm=page.locator(" div .col-text");
    }

async orderOperation(orderid){
   
this.orderbtn.click();
await this.page.waitForLoadState('networkidle');
await this.orderCompleteGrid.first().waitFor();
//get all rows
const OrderRowsCount=await this.OrderRows.count();
 for(let i=0;i<OrderRowsCount;i++)
 {
const orderRecordsRowsID=(await this.OrderRows.nth(i).locator("th").textContent()).trim();
if(orderRecordsRowsID===orderid) //if(OrderID.includes(orderRecordsRowsID))--if we use no need to trim and replace orderiD
{
//click view button in the same row
  await this.OrderRows.nth(i).locator("button:has-text('View')").click();
    break;
}
 }

    }
   async orderDetailsPage() {
  const text = await this.orderIDDetailsPageconfirm.textContent();
  return text.trim();
}
}
module.exports={OrdersPage};