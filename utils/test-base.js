const base = require('@playwright/test');

exports.customtest = base.test.extend(
    {
        testDataForOrder:{
username:"Test7276@gmail.com",
password:"Rushi@1234",
productName:"ZARA COAT 3"
}
    }
)