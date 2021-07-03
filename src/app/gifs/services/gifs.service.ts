import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
}) //Esto evita que tenga que especificarlo en los providers
//Angular lo eleva a un nivel global
export class GifsService {
  
  private apiKey    : string = "uP0RyN5oOVOLQhfCseOKY0fn1jRLdt4i";
  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  async buscarGifs ( query: string = '') {

    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes( query ) ){
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);
    }
    const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=uP0RyN5oOVOLQhfCseOKY0fn1jRLdt4i&q=dragon ball z&limit=10');
    const data = await resp.json();

    console.log(data);
  

    
  }
}
