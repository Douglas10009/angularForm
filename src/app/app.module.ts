import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { FormComponent } from './app/form/form.component';
import { MostrarDadosComponent } from './app/mostrar-dados/mostrar-dados.component';




@NgModule({
  declarations: [
    AppComponent,
    MostrarDadosComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }