import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  // 1. Tipado de TypeScript: Declaramos las variables y su tipo de dato
  readonly page: Page;
  readonly titleHeader: Locator;
  readonly inventoryItems: Locator;
  readonly shoppingCartBadge: Locator;

  constructor(page: Page) {
    this.page = page;

    // 2. Localizadores con selectores estables (data-test y clases de SauceDemo)
    this.titleHeader = page.locator('[data-test="title"]');
    this.inventoryItems = page.locator('.inventory_item');
    this.shoppingCartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  // 3. Método para añadir un producto específico usando su data-test
  async addProductToCart(productDataTest: string) {
    const addToCartButton = this.page.locator(`[data-test="add-to-cart-${productDataTest}"]`);
    await addToCartButton.click();
  }

  // 4. Métodos de verificación (Aserciones)
  async verifyPageLoaded() {
    await expect(this.titleHeader).toHaveText('Products');
  }

  async verifyCartBadgeCount(expectedCount: string) {
    await expect(this.shoppingCartBadge).toHaveText(expectedCount);
  }
}