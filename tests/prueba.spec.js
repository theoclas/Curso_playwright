import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=google&oq=google&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDE4MTZqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.getByRole('combobox', { name: 'Buscar' }).dblclick();
  await page.getByRole('combobox', { name: 'Buscar' }).press('CapsLock');
  await page.getByRole('combobox', { name: 'Buscar' }).fill('C');
  await page.getByRole('combobox', { name: 'Busc ar' }).press('CapsLock');
  await page.getByRole('combobox', { name: 'Buscar' }).fill('Ceere');
  await page.getByRole('combobox', { name: 'Buscar' }).press('CapsLock');
  await page.getByRole('combobox', { name: 'Buscar' }).fill('CeereS');
  await page.getByRole('combobox', { name: 'Buscar' }).press('CapsLock');
  await page.getByRole('combobox', { name: 'Buscar' }).fill('CeereSowftware');
  await page.getByRole('combobox', { name: 'Buscar' }).press('ArrowDown');
  await page.getByRole('combobox', { name: 'Buscar' }).click();
  await page.getByRole('combobox', { name: 'Buscar' }).press('ArrowLeft');
  await page.getByRole('combobox', { name: 'Buscar' }).press('ArrowLeft');
  await page.getByRole('combobox', { name: 'Buscar' }).press('ArrowLeft');
  await page.getByRole('combobox', { name: 'Buscar' }).press('ArrowLeft');
  await page.getByRole('combobox', { name: 'Buscar' }).press('ArrowLeft');
  await page.getByRole('combobox', { name: 'Buscar' }).press('ArrowLeft');
  await page.getByRole('combobox', { name: 'Buscar' }).press('ArrowLeft');
  await page.getByRole('combobox', { name: 'Buscar' }).fill('ceere software');
  await page.goto('https://www.google.com/search?q=ceere+software&sca_esv=396436077eb24e00&ei=p6NAZ8DFFIf9wbkPgeuqoQo&ved=0ahUKEwiAtaCJofCJAxWHfjABHYG1KqQQ4dUDCA8&uact=5&oq=ceere+software&gs_lp=Egxnd3Mtd2l6LXNlcnAiDmNlZXJlIHNvZnR3YXJlMgsQLhiABBjHARivATICECZItjdQrxxY3zJwBHgBkAEAmAGyAaAB-QuqAQQwLjEwuAEDyAEA-AEBmAINoALoCsICChAAGLADGNYEGEfCAgYQABgHGB7CAggQABgTGAcYHsICDhAuGNEDGBMYBxjHARgewgIMEC4Y0QMYBxjHARgewgIIEAAYBxgKGB6YAwCIBgGQBgaSBwM0LjmgB7cw&sclient=gws-wiz-serp');
  await page.getByRole('link', { name: 'Ceere Software – Desarrollo' }).click();
  await page.goto('https://ceere.net/');
});