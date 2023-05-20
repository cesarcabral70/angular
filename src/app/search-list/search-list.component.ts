import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent {
  @Input() cabralada: string = 'not implemented';

  @Input() dataResults: any;
  @Input() newResults: any;
  @Input() pokemonArray: any;
  @Input() data: string = 'not implemented';
  @Output() dataEvent = new EventEmitter<string>();

  constructor() {
    this.cabralada = 'This is content came from CABRALADA';
    this.data = 'This is content came from SEARCH LIST';
  }

  sendData() {
    // this.dataEvent.emit(this.cabralada);
    this.dataEvent.emit(this.data);
  }

  ngOnInit(): void {
    this.sendData();
  }
}
