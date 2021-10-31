import { Component, OnInit , ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido (): boolean{
    return this.miFormulario?.controls.producto?.invalid
            && this.miFormulario?.controls.producto?.touched;
  }

  precioValido (): boolean{
    return this.miFormulario?.controls.precio.touched
            && this.miFormulario?.controls.precio?.value <0;
            //Asi marcamos que el precio debe ser mayor que 0
  }
  //guardar ( miFormulario: NgForm) {
    //lo comento porque vamos a usar View Child para resumir codigo en la validación
    guardar (){
    console.log(this.miFormulario);
  }
}
