import { AfterContentInit, Component, Input, ViewChild } from '@angular/core';
import { SearchListComponent } from './search-list/search-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentInit {
  @ViewChild(SearchListComponent) child: any;
  @Input() msg: string = '{msg} not implemented';
  // @ViewChild(SearchComponent) child: any;
  // @ViewChildren('cmp') components: QueryList<SearchComponent>;

  @Input() data: any = 'not implemented';
  @Input() newData: any = 'not implemented';

  pokemonDataArray = [];

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

  ngAfterContentInit(): void {
    this.msg = this.child.cabralada;
  }
}
