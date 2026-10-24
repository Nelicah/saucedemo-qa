import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Catálogo e Inventario de Productos - SauceDemo', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    // Instanciamos ambas páginas
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);

    // Flujo previo: Iniciar sesión con usuario válido
    await loginPage.navigateTo();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('TC-INV-001: Visualización correcta del catálogo tras el login', async () => {
    await inventoryPage.verifyPageLoaded();
    await expect(inventoryPage.inventoryItems).toHaveCount(6);
  });

  test('TC-INV-002: Añadir un producto al carrito de compras', async () => {
    await inventoryPage.addProductToCart('sauce-labs-backpack');
    await inventoryPage.verifyCartBadgeCount('1');
  });
});