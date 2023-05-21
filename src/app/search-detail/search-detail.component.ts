import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.scss'],
})
export class SearchDetailComponent {
  @Input() pokemonDetail: any = {};
  @Input() show: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (Object.keys(this.pokemonDetail).length === 0) {
      this.show = false;
    } else {
      this.show = true;
    }
  }
}
