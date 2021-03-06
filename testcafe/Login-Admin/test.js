// test.js
// Login Admin

import Page from './page-model';

fixture  ('Test ChileWic', { noReloadBetweenTests: true })
   .page `http://localhost:3000/admins/sign_in`;

const page = new Page();

test('Iniciando Pruebas: Login Admin', async t => {
   await t
       .typeText(page.mailInput, 'admin2@mail.com')
       .typeText(page.passwordInput, 'hola1234')
       .click(page.boton)
       .wait(2000);
});
