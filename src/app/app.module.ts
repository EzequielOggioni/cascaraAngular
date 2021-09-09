import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponenteComponent } from './componentes/primer-componente/primer-componente.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { EjercicioComponent } from './componentes/ejercicio/ejercicio.component';
import { NoEncontradaComponent } from './componentes/no-encontrada/no-encontrada.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { VisorComponent } from './componentes/visor/visor.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponenteComponent,
    FormularioComponent,
    EjercicioComponent,
    NoEncontradaComponent,
    MenuComponent,
    VisorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
