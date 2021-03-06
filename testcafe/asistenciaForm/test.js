// test.js
// Asistencia Form

import Page from './page-model';

fixture  ('Test ChileWic', { noReloadBetweenTests: true })
   .page `http://localhost:3000/users/sign_in`;

const page = new Page();

test('Iniciando Pruebas', async t => {
   await t
      .typeText(page.mail1Input, 'usuario@mail.com')
      .typeText(page.passwordInput, 'hola1234')      
      .click(page.botonlogin)
      .click(page.botonAsistencia)
      .click(page.crearAsistenciaInput)
      .typeText(page.nameInput, 'Jorge')
      .typeText(page.mailInput, 'jorge@mail.com')
      .typeText(page.lastnameInput, 'Arenas')
      .typeText(page.telefonoInput, '91111111')
      .typeText(page.institucionInput, 'Universidad')
      .click(page.botonAgregar)
      .wait(2000);

});
