import {
  Component,
  Input,
  ViewChild,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() data: string = 'not implemented';
  @Output() dataPokemonEvent = new EventEmitter<any>();

  PokemonsNew = [
    {
      name: 'Cabral',
    },
    {
      name: 'Diana',
    },
    {
      name: 'Henrique',
    },
  ];

  sendPokemonData() {
    this.dataPokemonEvent.emit(this.PokemonsNew);
    console.log('sendPokemonData');
  }

  constructor() {}

  ngOnInit(): void {
    this.sendPokemonData();
  }
}
