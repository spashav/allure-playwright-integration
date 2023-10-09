import { test, expect } from "@playwright/test";
import { allure, LabelName } from "allure-playwright";

test("Test 1", async () => {
  await allure.epic("Web interface");
  await allure.feature("Feature 1");
  await allure.story("Authentication");
});

test("Log in with username and password", async () => {
  await allure.epic("Web interface");
  await allure.feature("Essential features");
  await allure.story("Authentication");
  // ...
});
test("Log in with username and password 2", async () => {
  await allure.epic("Web interface");
  await allure.feature("Essential features");
  await allure.story("Authentication 2");
  // ...
});

test.describe("Sub step test", async () => {
  test("Some test", async ({ page }) => {
    await allure.step("Step 1", async () => {
      // step without the body
      await allure.logStep("Log step");
      await allure.step("Sub-step 1", async () => {
        // ...
      });
      await allure.step("Sub-step 2", async () => {
        // ...
      });
    });
    await allure.step("Step 2", async () => {
      await allure.step("Sub-step 1", async () => {
        // ...
      });
      await allure.step("Sub-step 2", async () => {
        // ...
      });
    });
  });

  test("Some test 2", async ({ page }) => {
    await test.step("Step 1", async () => {
      // step without the body
      await allure.logStep("Log step");
      await test.step("Sub-step 1", async () => {
        // ...
      });
      await test.step("Sub-step 2", async () => {
        // ...
      });
    });
    await test.step("Step 2", async () => {
      await test.step("Sub-step 1", async () => {
        // ...
      });
      await test.step("Sub-step 2", async () => {
        // ...
      });
    });
  });
});

test.describe("parameter Authentication", () => {
  for (const login of ["johndie", "johndoe@example.com"]) {
    test(`Test Authentication ${login}`, async ({ page }) => {
      await allure.parameter("login", login);
      await allure.parameter("auth_method", "password");
      // ...
    });
  }

  test("Test Authentication With Empty Login", async ({ page }) => {
    await allure.parameter("login", "");
    await allure.parameter("auth_method", "password");
    // ...
  });
});

test("test 2", async ({ page }) => {
  await allure.description(
    "This test attempts to log into the website using a login and a password. Fails if any error happens.\n\nNote that this test does not test 2-Factor Authentication.",
  );
  await allure.owner("John Doe");
  await allure.tags("NewUI", "Essentials", "Authentication");
  await allure.link("https://example.com/docs", "Related Documentation");
  await allure.issue("AUTH-123", "https://example.com/issues/AUTH-123");
  await allure.tms("TMS-456", "https://example.com/tms/TMS-456");
  await allure.label(LabelName.LANGUAGE, "typescript");
  await allure.label(LabelName.FRAMEWORK, "playwright");
  await allure.severity("critical");
  await allure.id("123");
});
