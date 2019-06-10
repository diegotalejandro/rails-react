// test.js
// Login

import Page from './page-model';

fixture  ('Test ChileWic', { noReloadBetweenTests: true })
   .page `http://localhost:3000/users/sign_in`;

const page = new Page();

test('Iniciando Pruebas: Login', async t => {
   await t
       .typeText(page.mailInput, 'usuario@mail.com')
       .typeText(page.passwordInput, 'hola1234')
       .click(page.boton);
});
