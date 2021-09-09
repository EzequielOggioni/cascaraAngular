import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persona } from 'src/app/entidades/persona';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.css']
})
export class VisorComponent implements OnInit {

  @Input() persona!:Persona;
  @Input() modifica!:boolean;
  @Output() modificarPersona = new EventEmitter<number|undefined>();
  constructor() { }

  ngOnInit(): void {
  }
  ModificarPersona(idPersona:number | undefined){
    this.modificarPersona.emit(idPersona);
  }
}
