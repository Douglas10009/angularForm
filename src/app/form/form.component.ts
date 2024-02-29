import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MostrarDadosComponent } from "../mostrar-dados/mostrar-dados.component";


@Component({
    selector: 'app-form',
    standalone: true,
    templateUrl: './form.component.html',
    styleUrl: './form.component.css',
    imports: [FormsModule, MostrarDadosComponent]
})
export class FormComponent {
  // @Input() FormComponent !: FormComponent;

  nome:string = '';
  pessoa:Pessoa = new Pessoa;
  
  MostraNome(){
    this.pessoa.nome = this.nome;
    console.log(this.nome);
    
  }
}

class Pessoa { nome= ''; email= ''; idade= 0;}