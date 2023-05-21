import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() data: string = 'not implemented';
  @Input() errorSearch: boolean = false;
  @Input() searchItem: string = '';
  @Input() PokemonsDetail: object = {};
  @Input() PokemonsList: any = [];

  @Output() dataPokemonEvent = new EventEmitter<any>();
  @Output() dataSearchTerm = new EventEmitter<string>();
  @Output() dataDetailPokemonEvent = new EventEmitter<any>();

  constructor() {}

  clickme() {
    this.getPokemon(this.searchItem.toLowerCase());
  }

  async getPokemon(name: string) {
    const searchTerm = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const value = await fetch(searchTerm)
      .then((response) => response.json())
      .then((data) => {
        // console.log('resultad', data);
        this.errorSearch = false;
        this.PokemonsDetail = data;
        this.sendPokemonDetail();
        this.sendSearchItemData(this.searchItem.toLowerCase());
      })
      .catch(() => {
        // alert('error');
        this.errorSearch = true;
        this.sendSearchItemData('');
        this.sendPokemonDetail();
      });
  }

  async getPokemonInit() {
    const searchTerm = `https://pokeapi.co/api/v2/pokemon/`;
    const value = await fetch(searchTerm)
      .then((response) => response.json())
      .then((data) => {
        this.PokemonsList = data.results;
        this.sendPokemonData();
      });
  }

  ngOnInit() {
    this.getPokemonInit();
  }

  sendPokemonData() {
    this.dataPokemonEvent.emit(this.PokemonsList);
  }

  sendSearchItemData(data: string) {
    this.dataSearchTerm.emit(data);
  }

  sendPokemonDetail() {
    if (!this.errorSearch && this.searchItem.length !== 0) {
      this.dataDetailPokemonEvent.emit(this.PokemonsDetail);
    } else {
      this.dataDetailPokemonEvent.emit({});
    }
  }
}
