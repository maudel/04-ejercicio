import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <p>
      {{item.title}}
    </p>
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

}
