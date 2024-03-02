import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from "./form/form.component";
import { MostrarDadosComponent } from "./mostrar-dados/mostrar-dados.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Formulario';

  // @Input() FormComponent !: FormComponent;
}
