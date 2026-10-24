import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItem: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItem = page.locator('.cart_item');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async navigateToCart() {
    await this.page.goto('https://www.saucedemo.com/cart.html');
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }

  async verifyItemInCart(productName: string) {
    const itemTitle = this.page.locator('.inventory_item_name');
    await expect(itemTitle).toHaveText(productName);
  }
}