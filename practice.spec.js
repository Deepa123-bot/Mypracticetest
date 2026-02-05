import { test, expect, chromium } from '@playwright/test';
import path from 'path';


test.describe('Test Suite', () => {

    test('Check the locator of practice form', async() => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://demoqa.com/automation-practice-form');

    await page.locator('#firstName').fill('Deepa');
    await page.locator('#lastName').fill('Shah');
    await page.locator('#userEmail').fill('sahdeepmala777@gmail.com');

    // Gender (click label)
    await page.locator('label[for="gender-radio-2"]').click();

    await page.locator('#userNumber').fill('9876543210');

    await page.locator('#dateOfBirthInput').fill('13 jan 2002');
    await page.keyboard.press('Enter'); 

    // Subjects
    await page.locator('#subjectsInput').fill('Computer Science');
    await page.keyboard.press('Enter');

    // Hobbies
    await page.locator('label[for="hobbies-checkbox-3"]').click();

    // Upload Picture
    //const filepath = path.resolve(__dirname, '../Data/me.jpg'); Didn't Work
    const filepath = path.resolve(process.cwd(), 'Data/me.jpg');    //current working directory
    await page.locator('#uploadPicture').setInputFiles(filepath);

    await page.locator('#currentAddress').fill('Kathmandu,Nepal');

    await page.locator('#state').scrollIntoViewIfNeeded();
    await page.locator('#state').click();
    await page.getByText('NCR',{exact:true}).click();

    await page.locator('#city').scrollIntoViewIfNeeded();
    await page.locator('#city').click();
    await page.getByText('Delhi',{exact:true}).click();

    // State
   /* await page.locator('#state').click();
    await page.locator('#react-select-3-option-0').click();

   // City
    await page.locator('#city').click();
    await page.locator('#react-select-4-option-0').click(); */

    // Submit
    await page.locator('#submit').click();

    // Assertion
    const successTitle = await page.locator('#example-modal-sizes-title-lg').textContent();
    console.log(successTitle);
    expect(successTitle).toEqual('Thanks for submitting the form');

});

});