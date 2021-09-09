import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, RouterOutlet, ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/entidades/persona';
import { MensajeService } from 'src/app/helpers/mensaje.service';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.css']
})
export class EjercicioComponent implements OnInit {
  variablePadre:string;
  personaArray: Array<Persona>;
  modificando: number | undefined;
 
  miparametro:string;
  constructor(private misMensaje: MensajeService, private ruteo:ActivatedRoute) {

    this.miparametro=''
    this.modificando = -1;
    this.variablePadre = "Viene del ejercicio component";
    this.personaArray = [{ nombre: "Mateo", apellido: "Gomez", dni: 23564485, id: 1 },
    { nombre: "Lara", apellido: "Perez", dni: 45644485, id: 2 },
    { nombre: "Nehuen", apellido: "Gutierrez", dni: 35644444, id: 3 },
    { nombre: "Rafaela", apellido: "Correa", dni: 15774866, id: 4 }];

  }
 
  ModificarPersona(id: number | undefined) {
    this.modificando = id;

  }


  ngOnInit(): void {
    this.miparametro = this.ruteo.snapshot.paramMap.get('datoEntrada')??'';
  }
  mostrar() {
    console.info(this.personaArray);
    this.personaArray.forEach(per => alert(per.apellido));
    this.misMensaje.Mensaje = this.personaArray[0].apellido??''; 
  }




}
