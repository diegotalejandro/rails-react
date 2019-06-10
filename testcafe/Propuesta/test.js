// test.js
// Propuesta

import Page from './page-model';

fixture  ('Test ChileWic', { noReloadBetweenTests: true })
   .page `http://localhost:3000/users/sign_in`;

const page = new Page();

test('Iniciando Pruebas: Propuesya', async t => {
   await t
      .typeText(page.mail1Input, 'usuario@mail.com')
      .typeText(page.passwordInput, 'hola1234')
      .click(page.botonlogin)
      .click(page.botonPropuesta)
      .click(page.botonCrearPropuesta)
      .typeText(page.nameInput, 'Jorge')
      .typeText(page.mailInput, 'usuario@mail.com')
      .typeText(page.tituloInput, 'TDD')
      .typeText(page.organizacionInput, 'UDP')
      .typeText(page.resumenInput, 'Metodología TDD')
      .click(page.boton)
      .wait(1000);

});
