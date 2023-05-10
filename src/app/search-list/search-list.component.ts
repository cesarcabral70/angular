import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent {
  @Input() cabralada: string = 'not implemented';
  @Output() dataEvent = new EventEmitter<string>();

  constructor() {
    this.cabralada = 'Diana';
    console.log(this.cabralada, 'SearchListComponent');
  }

  sendData() {
    this.dataEvent.emit(this.cabralada);
  }

  ngOnInit(): void {
    this.sendData();
  }
}
