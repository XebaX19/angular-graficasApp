import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }

  getDataUsuariosRedesSociales() {
    return this.http.get('http://localhost:3000/grafica');
  }
  
  getDataUsuariosRedesSocialesModificada() {
    return this.getDataUsuariosRedesSociales()
      .pipe(
        delay(1000),
        map(data => { //El map nos permite tomar la respuesta de un Observable y retornar lo que necesitemos
          const labels = Object.keys(data);
          const values = Object.values(data);

          return {labels: labels, values: values };
        })
      );
  }
}
