import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <div class="todo-item">
      <p>
        {{item.title}}
      </p>
      <button class="btn-red" (click)="removeItem()">Eliminar</button>
    </div>
  `,
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: any;
  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() {
  }
  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }
  ngOnInit() {

  }
  removeItem() {

  }
}
