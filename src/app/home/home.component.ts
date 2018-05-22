import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemCount: number = 4;
  agregaItem: string ='Añade un ítem a tu lista';
  btnText: string = 'Add an Item';
  agregarCosas: string = 'Agregar cosas';
  color_boton_rojo: string = 'btnRojo';
  goalText: string = 'My first life goal '; //2-way data binding
  input_binding: string ='Cambia de texto con el segundo input';
  constructor() { }

  ngOnInit() {
  }

}
