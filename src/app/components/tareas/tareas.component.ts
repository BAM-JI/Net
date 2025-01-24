import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea'

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listaTareas: Tarea [] = [];
  nombreTarea = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(){
    // console.log(this.nombreTarea);
    // crear un objeto tarea 
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false,
    }

    // Agregar el objeto tarea al array
    this.listaTareas.push(tarea);

    // Resetear formulario
    this.nombreTarea = '';


  }
  eliminarTarea(index: number): void{
    //console.log(index);
    this.listaTareas.splice(index, 1);

  }
  actualizaTarea(index: number, tarea: Tarea): void{
    this.listaTareas[index].estado = !tarea.estado;
  }

}