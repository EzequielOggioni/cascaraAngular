import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  private mensaje: string;
public provincias: any;
  constructor() {
    this.provincias = [{nombre:'dasdas'}];
    this.mensaje = 'mensaje por defecto del servicio';
  }

  public get Mensaje(): string {
    return this.mensaje;
  }
  public set Mensaje(miMensaje: string) {
    this.mensaje = miMensaje;
  }

}
