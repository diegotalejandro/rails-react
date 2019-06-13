import { Selector } from 'testcafe';

export default class Page {
   constructor () {

    // Selecciona el elemento que contiene el input de E-Mail
    this.mail1Input      = Selector('#exampleInputEmail1');

    // Selecciona el elemento que contiene el input de Password
    this.passwordInput  = Selector('#user_password');

    // Selecciona el elemento que contiene el botón Sing up
    this.botonlogin          = Selector('#new_user > div:nth-child(6) > input');

    // Selecciona el elemento que contiene el botón Sing up
    this.botonPropuesta         = Selector('#navbar > ul:nth-child(1) > li:nth-child(3) > a');

    this.botonCrearPropuesta         = Selector('body > div > div > div > div > div.card-footer.text-muted > a:nth-child(1)');


       // Selecciona el elemento que contiene el input de Nombre
       this.nameInput         = Selector('input[name=nombre]');

       // Selecciona el elemento que contiene el input de E-Mail
       this.mailInput         = Selector('input[name=correo]');

       // Selecciona el elemento que contiene el input de Telefono
       this.tituloInput       = Selector('input[name=titulo]');

       // Selecciona el elemento que contiene el input de Password
       this.organizacionInput = Selector('input[name=organizacion]');

        // Selecciona el elemento que contiene el input de Comfirmar Passwprd
        this.resumenInput     = Selector('input[name=resumen]');

       // Selecciona el elemento que contiene el botón Agregar nueva propuesta
       this.boton             = Selector('body > div:nth-child(3) > div > form > div > div > button');

   }
}
