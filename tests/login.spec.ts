import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Autenticación y Login - SauceDemo', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateTo();
  });

  test('TC-LOG-001: Inicio de sesión exitoso con usuario estándar', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('TC-LOG-002: Intento de inicio de sesión con usuario bloqueado', async () => {
    await loginPage.login('locked_out_user', 'secret_sauce');
    await loginPage.verifyErrorMessage('Epic sadface: Sorry, this user has been locked out.');
  });
});