import { expect, test } from "@playwright/test";

test("index page has expected h1", async ({ page }) => {
  await page.goto("/");
  expect(await page.textContent("h1")).toContain("Crack 'n' Code");
});

test("about page has expected text", async ({ page }) => {
  await page.goto("/about");
  expect(await page.textContent("p")).toContain("สสวท");
});

test("rules page", async ({ page }) => {
  await page.goto("/rules");
  expect(await page.textContent("h1")).toContain("กฎ");
});

test("ranking page", async ({ page }) => {
  await page.goto("/ranking");
  expect(await page.textContent("h1")).toContain("Ranking");
});
