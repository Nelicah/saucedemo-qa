import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Flujo End-to-End de Compra - SauceDemo', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    // Login previo
    await loginPage.navigateTo();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('TC-E2E-001: Flujo completo de compra exitosa (Happy Path)', async ({ page }) => {
    // 1. Añadir producto desde el inventario
    await inventoryPage.addProductToCart('sauce-labs-backpack');
    await inventoryPage.verifyCartBadgeCount('1');

    // 2. Ir al carrito y verificar el producto
    await cartPage.navigateToCart();
    await cartPage.verifyItemInCart('Sauce Labs Backpack');
    await cartPage.proceedToCheckout();

    // 3. Rellenar datos de envío y continuar
    await checkoutPage.fillShippingInfo('Cande', 'Zamora', '25001');
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

    // 4. Finalizar compra y verificar mensaje de éxito
    await checkoutPage.finishCheckout();
    await checkoutPage.verifyOrderSuccess();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
  });
});