// create playwright tests for LostPet.razo
// https://playwright.dev/docs/test-configuration
// https://playwright.dev/docs/test-configuration#configuration-options
// https://playwright.dev/docs/test-configuration#test-options
// https://playwright.dev/docs/test-configuration#fixtures
// https://playwright.dev/docs/test-configuration#workers
// https://playwright.dev/docs/test-configuration#projects
// https://playwright.dev/docs/test-configuration#timeout
// https://playwright.dev/docs/test-configuration#global-setup-and-teardown
// https://playwright.dev/docs/test-configuration#global-fixture
// https://playwright.dev/docs/test-configuration#test-snapshots
// https://playwright.dev/docs/test-configuration#test-coverage
// https://playwright.dev/docs/test-configuration#test-reporters
// https://playwright.dev/docs/test-configuration#test-runner
// https://playwright.dev/docs/test-configuration#test-ignore
// https://playwright.dev/docs/test-configuration#test-match
// https://playwright.dev/docs/test-configuration#test-timeout
// https://playwright.dev/docs/test-configuration#test-skip
// https://playwright.dev/docs/test-configuration#test-retries
// https://playwright.dev/docs/test-configuration#test-retry
// https://playwright.dev/docs/test-configuration#test-worker-fixtures
// https://playwright.dev/docs/test-configuration#test-worker-options
// https://playwright.dev/docs/test-configuration#test-worker-projects
// https://playwright.dev/docs/test-configuration#test-worker-repeat-each
// https://playwright.dev/docs/test-configuration#test-worker-seed
// Path: tests/playwright/tests/lostpage.spec.ts

//import dependencies
import { test, expect } from '@playwright/test';
// test that h2 element with the words "Step 1: Tell us about your pet and how to contact you" renders
test('has h2 element with the words "Step 1: Tell us about your pet and how to contact you"', async ({ page }) => {
    await page.goto('http://app.9e5524d3a2474ae58276.westus3.aksapp.io/lost');
    // Expect a h2 element with the words "Step 1: Tell us about your pet and how to contact you".
    await expect(page).toHaveSelector('h2', { text: 'Step 1: Tell us about your pet and how to contact you' });
    }
);

// test that dropdown menu renders
test('has dropdown menu', async ({ page }) => {
    await page.goto('http://app.9e5524d3a2474ae58276.westus3.aksapp.io/lost');
    // Expect a dropdown menu.
    await expect(page).toHaveSelector('select');
    }
);

// test that you can upload images when you click Choose Files button
test('has Choose Files button', async ({ page }) => {
    await page.goto('http://app.9e5524d3a2474ae58276.westus3.aksapp.io/lost');
    // Expect a Choose Files button.
    await expect(page).toHaveSelector('input[type=file]');
    }
);
