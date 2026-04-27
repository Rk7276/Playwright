const Exceljs = require('exceljs');//Library
const { test, expect } = require('@playwright/test');
//Configure Exceljs
//1] One thing use function or await 
// const workbook = new Exceljs.Workbook();
// workbook.xlsx.readFile("C:/Users/Rushikesh.Kadam/Downloads/exceldownload.xlsx").then(function(){
// const worksheet = workbook.getWorksheet('Sheet1');
// worksheet.eachRow((row, rowNumber) => {  //Outer for loop
//     row.eachCell((cell, colNumber) => {//Inner for Loop
//         console.log(cell.value)
//     })
// })
// })

//2] using await for that need to create function

async function writeExcelTest(searchText, replaceText, change, filePath) {
    const workbook = new Exceljs.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('Sheet1');
    const output = await readExcel(worksheet, searchText);
    //Replace Apple to Iphone
    const cell = worksheet.getCell(output.row, output.column + change.colChange);
    cell.value = replaceText;

    //save the replaces value
    await workbook.xlsx.writeFile(filePath);
}

async function readExcel(worksheet, searchText) {
    let output = { row: -1, column: -1 };
    worksheet.eachRow((row, rowNumber) => {  //Outer for loop
        row.eachCell((cell, colNumber) => {//Inner for Loop
            if (cell.value === searchText) {
                // console.log(rowNumber);
                // console.log(colNumber);
                output.row = rowNumber;
                output.column = colNumber;
            }

            //console.log(cell.value)
        })
    })
    return output;

}
//call function 
//Update Mango Price to 350
//writeExcelTest("Mango",350,{rowChange:0,colChange:2},"C:/Users/Rushikesh.Kadam/Downloads/exceldownload.xlsx")

test.only('Upload Download Excel Validation', async ({ page }) => {
    const textSearch="Mango"
    const updateValue=350;
    await page.goto("https://rahulshettyacademy.com/upload-download-test/");
    //wait untill that event fully download 
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Download' }).click();
    await downloadPromise;
    //once download excel then import exceljs here
    writeExcelTest(textSearch, updateValue, { rowChange: 0, colChange: 2 }, "C:/Users/Rushikesh.Kadam/Downloads/download.xlsx")
    await page.locator("#fileinput").click();
    //To handle in your compute data use setInputFile method
    //Just Uplaod file its work only in ur componet as Type:File in Inspect
    await page.locator("#fileinput").setInputFiles("C:/Users/Rushikesh.Kadam/Downloads/download.xlsx");
    const textlocator=page.getByText(textSearch);
    const desiredRow=await page.getByRole('row').filter({has:textlocator});
await expect(desiredRow).toBeVisible();
     await expect(desiredRow.locator('#cell-4-undefined')).toContainText(String(updateValue));
});