import { ElementRef, ViewChild, Component } from '@angular/core';
import { ChildActivationStart } from '@angular/router';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent{

    @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  //este operador garantiza al compilador que el objeto no es nulo "Non-null assertion operator"
  //propio de typescript

    constructor( private gifsService: GifsService ) {}

    buscar( ): void {
      const valor = this.txtBuscar.nativeElement.value;

      const formateado = valor.trim().toLocaleLowerCase();

      if ( valor.trim().length === 0){
        return;
      }
      
      this.gifsService.buscarGifs(formateado);

      this.txtBuscar.nativeElement.value = '';
    }

}
