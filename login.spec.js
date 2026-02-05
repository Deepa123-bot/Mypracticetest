// @ts-check
import { test, expect } from '@playwright/test';


test.describe('Login Test', () => {

test.beforeAll(() => {
  console.log('This is beforeAll')

})

test.beforeEach(() => {
  console.log('This is beforeEach')

})

test.afterEach(() => {
  console.log('This is afterEach')

})

test.afterAll(() => {
  console.log('This is afterAll')

})
  
test('Test One', () => {
  console.log('This is test one')

});

test('Test Two', () => {
  console.log('This is test two')

});

test('Verify user can login with valid credentials', () => {
  console.log('This is test three')

});

test('Verify user get error login with invalid credentials', () => {
  console.log('This is test four')

});

});

