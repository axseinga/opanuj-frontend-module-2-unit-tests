import { test, expect } from "@playwright/test";
import { PAGES } from "../utils/consts";

test("navigate to first product details page", async ({ page }) => {
  page.goto(PAGES.HOMEPAGE);

  const productList = page.getByRole("list");
  const firstResult = productList.locator("li").first();
  const firstProductLink = firstResult.locator("a").first();;

  await firstProductLink.click();

  const main = page.getByRole("main");

  await expect(main).toHaveText(/Back to main page/);
});
