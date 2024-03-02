import { Component, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-mostrar-dados',
  templateUrl: './mostrar-dados.component.html',
  styleUrl: './mostrar-dados.component.css'
})
export class MostrarDadosComponent {
  @Input() nome!: string;

  mostraDados(){
    console.log(this.nome);

  }
}
