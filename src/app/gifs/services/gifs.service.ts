import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
}) //Esto evita que tenga que especificarlo en los providers
//Angular lo eleva a un nivel global
export class GifsService {
  
  private apiKey    : string = "uP0RyN5oOVOLQhfCseOKY0fn1jRLdt4i";
  private _historial: string[] = [];

  // TODO: cambiar any por su tipo correspondiente
  public resultados: any[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor( private http: HttpClient ) {}

  buscarGifs ( query: string = '') {

    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes( query ) ){
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);
    }
    
    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=uP0RyN5oOVOLQhfCseOKY0fn1jRLdt4i&q=${ query }&limit=10`)
          .subscribe( (resp: any) => {
            console.log( resp.data );
            this.resultados = resp.data;
          });
  

    
  }
}
