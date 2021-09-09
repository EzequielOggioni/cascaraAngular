import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/entidades/persona';

@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.css']
})
export class PrimerComponenteComponent implements OnInit {
  nombres:Array<Persona>;
  modelo:string;
  miClase:string;
  nombreProyecto: string;
  opcionSeleccionado: string  = '0';
  

  @Input() miValor!:string;

  constructor(  private router: Router) {

    this.nombreProyecto = "mi proyecto";
    this.modelo="";
    this.miClase= "rojo";
    this.nombres = [];

    // if(localStorage.getItem('token') == 'válido'){
    //   this.router.navigate(['/formulario']);
    // }


  }
  ngOnInit(): void {
  }

  cambiarValor() {
    localStorage.setItem('token', 'válido');
    this.nombreProyecto = "otro proyecto";
    this.miClase="azul";
    this.router.navigate(['/formulario']);
  }
  salir(){
    localStorage.removeItem('token');
  }

  mostrarEnAlert(valor: string): void {
    alert(valor);
  }

  cambiarNombreProyecto() {  
    this.miClase = "rojo" ;
     this.nombreProyecto= (<HTMLInputElement>document.getElementById("txtNombre")).value;    
  }

  mostrarSeleccionado(){
    let persona = (<HTMLInputElement>document.getElementById("optPersonas")).value;
     
    alert(persona);
  }

}
