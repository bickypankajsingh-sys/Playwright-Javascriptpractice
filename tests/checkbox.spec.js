import{test,expect} from '@playwright/test';

//check box test
/*test('Checkbox Test', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
   // const sportsCheckbox = page.locator('#hobbies-checkbox-1');
    await page.locator('#hobbies-checkbox-1').check();
    await expect(page.locator('#hobbies-checkbox-1')).toBeChecked();
    
    await page.locator('#hobbies-checkbox-2').check();
    await expect(page.locator('#hobbies-checkbox-2')).toBeChecked();

    await page.locator('#hobbies-checkbox-3').check();
    await expect(page.locator('#hobbies-checkbox-3')).toBeChecked();    
    //uncheck the checkbox
    await page.locator('#hobbies-checkbox-1').uncheck();
    await expect(page.locator('#hobbies-checkbox-1')).not.toBeChecked();

    await page.locator('#hobbies-checkbox-2').uncheck();
    await expect(page.locator('#hobbies-checkbox-2')).not.toBeChecked();

    await page.locator('#hobbies-checkbox-3').uncheck();
    await expect(page.locator('#hobbies-checkbox-3')).not.toBeChecked();

    
    
    //dropdown button
    test('Gender Radio Button Test', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');

    // Select Male
    await page.locator('#gender-radio-1').check({ force: true });
    await expect(page.locator('#gender-radio-1')).toBeChecked();

    // Select Female
    await page.locator('#gender-radio-2').check({ force: true });
    await expect(page.locator('#gender-radio-2')).toBeChecked();

    // Select Other
    await page.locator('#gender-radio-3').check({ force: true });
    await expect(page.locator('#gender-radio-3')).toBeChecked();

});  

//date picker

test('Date Picker Test', async ({ page }) => {

    await page.goto('https://demoqa.com/date-picker');


   /* // Click on Date Picker input
    await page.locator('#dateOfBirthInput').click();

    // Select Year
    const yearDropdown = page.locator('.react-datepicker__year-select');
    await yearDropdown.selectOption('1990');

    // Select Month (January = 0)
    const monthDropdown = page.locator('.react-datepicker__month-select');
    await monthDropdown.selectOption('0');

    // Select Date (15 January 1990)
    await page.locator('.react-datepicker__day--015:not(.react-datepicker__day--outside-month)').click();

    // Verify selected date
    await expect(page.locator('#dateOfBirthInput')).toHaveValue('01/15/1990');

});   */

//upload file test

test('Upload File Test', async ({ page }) => {

    await page.goto('https://demoqa.com/upload-download');

    // Upload image
    await page.locator('#uploadFile').setInputFiles(
        'C:\\Users\\Admin\\OneDrive\\Desktop\\naturepic.jpg'
    );

    // Verify uploaded file path is displayed
    await expect(page.locator('#uploadedFilePath'))
        .toBeVisible();

});