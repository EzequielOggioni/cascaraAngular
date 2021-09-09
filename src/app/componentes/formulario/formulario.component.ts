import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/helpers/api.service';
import { MensajeService } from 'src/app/helpers/mensaje.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  
  constructor(public servicioMensaje :MensajeService, private api:ApiService ) { }

  ngOnInit(): void {
     this.api.traerValores().subscribe(resp => this.provincias = <Array<any>>resp);
    

  }

  name: string = '';
  public provincias!:Array<any>;

  setValue() {
    this.name = this.servicioMensaje.Mensaje;
  }
}
