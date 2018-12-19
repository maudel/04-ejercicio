import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list-manager',
  template: `
  <div class="">
    <h1>
      {{title}}
    </h1>
    <todo-input (submit)="addItem($event)" ></todo-input>
    <ul>
      <li *ngFor="let todoItem of todoList">
        <todo-item [item]="todoItem"></todo-item>
      </li>
    </ul>
  </div>

  `,
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {
  title = 'Lista de Pasos para hacer un proyecto con Angular';
  esMartes = false;
  valorFinal = 1;
  rojo = 'blue';
  todoList = [
    {title: 'Inslala NodeJS'},
    {title: 'Instala Angular CLI'},
    {title: 'crear new app'},
    {title: 'correr app'},
    {title: 'desarrolladro app'},
    {title: 'deployar app'},
  ];
  excede = this.todoList.length > 0;
  constructor() { }

  ngOnInit() {
  }



  cambiarRojo() {
    return 'red';
  }
  cambiarColor() {
    if (this.valorFinal === 1) {
      this.valorFinal = 0;
    } else {
      this.valorFinal = 1;
    }
    return this.valorFinal;
  }
  agregaItem(): void {

    this.todoList.push({ title: this.title});
  }
  cambiarTitulo (event: any): void {
    console.log(event);
    this.title = event.target.value;

  }
  addItem(title: string): void {
    console.log('asdasd')
    this.todoList.push({ title });
  }

}
