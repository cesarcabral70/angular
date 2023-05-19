import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(SearchListComponent) dataSearchList: any;
  @ViewChild(SearchComponent) dataSearch: any;
  @Input() msg: string = '{msg} not implemented';

  @Input() data: any = 'not implemented';
  @Input() newData: any = 'not implemented';
  @Input() pokemonDataArray: Object[] = [];

  Pokemons = [
    {
      name: 'ditto',
    },
    {
      name: 'pikachu',
    },
    {
      name: 'bulbasauro',
    },
    {
      name: 'charizard',
    },
  ];

  constructor() {}

  ngAfterViewInit(): void {
    this.msg = this.dataSearchList.cabralada;
    this.pokemonDataArray = this.dataSearch.PokemonsNew;
  }

  receiveCustomData($event: any) {
    this.msg = $event;
    alert('oi');
    console.log('receiveCustomData');
  }

  receivePokemonData($event: any) {
    console.log('receivePokemonData');
    alert('OI');
    this.pokemonDataArray = $event;
  }
}
