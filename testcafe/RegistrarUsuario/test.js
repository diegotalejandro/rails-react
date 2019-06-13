// test.js
// Registrar Usuario

import Page from './page-model';

fixture  ('Test ChileWic', { noReloadBetweenTests: true })
   .page `http://localhost:3000/users/sign_up`;

const page = new Page();

test('Iniciando Pruebas: Registrar Usuario', async t => {
   await t
       .typeText(page.nameInput, 'Jorge')
       .typeText(page.mailInput, 'jorginho@mail.com')
       .typeText(page.telefonoInput, '91111111')
       .typeText(page.passwordInput, 'contraseña')
       .typeText(page.confPasswordInput, 'contraseña')
       .click(page.boton)
       .wait(2000);
});
