import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent {
  @Input() message: string = 'Search for your Pokemon';
  @Input() pokemonArray: any = [];

  @Output() dataEvent = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    if (this.pokemonArray.length > 0) {
      this.message = 'Suggest of Pokemons';
    } else {
      this.message = 'Loading list ...';
    }
  }

  copyItem(name: any) {
    navigator.clipboard.writeText(name);
  }
}
