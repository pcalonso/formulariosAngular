import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona{
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito{
  id: number;
  nombre: string;
}
//creamos las interface que se van a manejar

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  nuevoJuego: string ="";
  persona: Persona ={
    //objeto inicializador del formulario para ver como funciona
    nombre: "Pamela",
    favoritos: [
      { id: 1, nombre : "Metal Gear"},
      { id: 2, nombre: "Death Stranding"},
    ]
  }

  agregarJuego(){
    const nuevoFavorito: Favorito = {
      //este objeto necesita esta estructura, nombre y ID
      id: this.persona.favoritos.length + 1,
      //vemos el ultimo id y le sumamos uno
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoFavorito});
    //uso el operador Spratt para esparcir todas las propiedades y así
    //nos aseguramos de que no vamos a mandar ninguna referencia al objeto
    this.nuevoJuego = "";
  }

  eliminar( index: number) {
    //recibo el elemento
    this.persona.favoritos.splice(index, 1);
    //splice se usa para borrar algo del arreglo, lo que quiero borrar y la cantidad

  }

  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido (): boolean{
    return this.miFormulario?.controls.nombre?.invalid
            && this.miFormulario?.controls.nombre?.touched;
  }
  guardar () {
    console.log(this.miFormulario);
  }


}
