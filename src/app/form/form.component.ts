import { Component} from '@angular/core';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrl: './form.component.css',
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
