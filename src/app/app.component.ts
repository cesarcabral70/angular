import { AfterViewInit, Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @Input() msg: string = '{msg} not implemented';
  @Input() searchTerm: string = '';

  @Input() newData: any = 'not implemented';
  @Input() pokemonDataDetail: Object = {};
  @Input() pokemonDataArray: Object[] = [];

  constructor() {}

  ngAfterViewInit(): void {}

  receivePokemonData($event: any) {
    this.pokemonDataArray = $event;
  }

  receiveSearchTerm($event: any) {
    this.searchTerm = $event;
  }

  receivePokemonDetailData($event: any) {
    this.pokemonDataDetail = $event;
  }
}
