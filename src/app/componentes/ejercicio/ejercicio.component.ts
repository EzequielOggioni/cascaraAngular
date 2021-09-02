import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/entidades/persona';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.css']
})
export class EjercicioComponent implements OnInit {
 
  personaArray:Array<Persona>;
  modificando:number|undefined;
  constructor() { 
    this.modificando = -1;
    this.personaArray = [{nombre:"Mateo",apellido:"Gomez",dni:23564485,id:1}, 
    {nombre:"Lara",apellido:"Perez",dni:45644485,id:2},
    {nombre:"Nehuen",apellido:"Gutierrez",dni:35644444,id:3},
    {nombre: "Rafaela",apellido:"Correa",dni:15774866, id:4}];
    
  }
  ModificarPersona(id:number|undefined){
    this.modificando=id;

  }

  
  ngOnInit(): void {
  }
mostrar(){
  console.info(this.personaArray);
  this.personaArray.forEach(per=>  alert(per.apellido));
}




}
