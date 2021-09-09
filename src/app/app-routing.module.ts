import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjercicioComponent } from './componentes/ejercicio/ejercicio.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { NoEncontradaComponent } from './componentes/no-encontrada/no-encontrada.component';
import { PrimerComponenteComponent } from './componentes/primer-componente/primer-componente.component';
import { CustodiaGuard } from './helpers/custodia.guard';

const routes: Routes = [
  { path: 'ejercicio', component: EjercicioComponent, canActivate: [CustodiaGuard] },
  { path: 'ejercicio/:datoEntrada', component: EjercicioComponent, canActivate: [CustodiaGuard] },
  { path: 'ejercicios', redirectTo: 'ejercicio' },
  {
    path: 'formulario', component: FormularioComponent, canActivate: [CustodiaGuard],
    children: [{ path: 'aaa', component: PrimerComponenteComponent }]
  },
  { path: '', component: PrimerComponenteComponent },
  { path: '**', component: NoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
