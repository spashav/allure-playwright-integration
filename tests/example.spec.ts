import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';

test('Test 1', async () => {
  await allure.epic('Web interface');
  await allure.feature('Feature 1');
  await allure.story('Authentication');
});