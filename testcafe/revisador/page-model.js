import { Selector } from 'testcafe';

export default class Page {
   constructor () {
       // Selecciona el elemento que contiene el input de E-Mail
       this.mailInput         = Selector('#exampleInputEmail1');

       // Selecciona el elemento que contiene el input de Password
       this.passwordInput  = Selector('#reviser_password');

       // Selecciona el elemento que contiene el botón Sing up
       this.boton                 = Selector('#new_reviser > div:nth-child(6) > input');

        // Selecciona el elemento que contiene el botón de ver propuesta
        this.botonVerPropuesta                 = Selector('#navbarNavDropdown > ul:nth-child(1) > li.nav-item > a');

        this.botonVer                 = Selector('body > div > div > div > div > div.card-body > table > tbody > tr > td:nth-child(5) > a');

        // Selecciona el elemento que contiene el botón de ver propuesta
        this.botonCalificar                = Selector('body > div > div > div.card-footer.text-muted > a:nth-child(1)');

       // Selecciona el elemento que contiene el Input de Rating
       this.Rating                = Selector('input[name=rating]');

       // Selecciona el elemento que contiene el botón de Calificar
       this.botonCalificarValor                = Selector('body > div > div > div > form > div > div > button');

   }
}
