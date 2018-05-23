import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent{

	mostrar:boolean= true;

	frase:any = {
		autor: 'Flaite Drogado',
		mensaje: 'Somos el mejor país de Chile hermano'
	};
 

}
