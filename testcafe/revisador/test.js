// test.js
// Registrar Usuario

import Page from './page-model';

fixture  ('Test ChileWic', { noReloadBetweenTests: true })
   .page `http://localhost:3000/revisers/sign_in`;

const page = new Page();

test('Iniciando Pruebas: Calificar Propuesta', async t => {
   await t
       .typeText(page.mailInput, 'reviser@mail.com')
       .typeText(page.passwordInput, 'hola1234')
       .click(page.boton)
       .click(page.botonVerPropuesta)
       .click(page.botonVer)
       .click(page.botonCalificar)
       .typeText(page.Rating, '3')
       .click(page.botonCalificarValor)
       .wait(2000);

});
