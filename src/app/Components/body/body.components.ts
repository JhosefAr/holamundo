import { Component } from '@angular/core';
@Component({
    selector: 'app-body',
    templateUrl: './body.components.html'
})
export class BodyComponents {
    mostrar = true;
    frase: any = {
        mensaje: 'Longitud: 356 mm, Alimentación: Tambor 6 cartuchos, Cañón: 210 mm, Peso (arma): 1,5 Kg., Calibre: .44 Magnum',
        autor: 'SMITH & WESSON Modelo 29 .44Magnum'
    }
}
