import { AfterContentInit, Component, Input, ViewChild } from '@angular/core';
import { SearchListComponent } from './search-list/search-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentInit {
  @ViewChild(SearchListComponent) child: any;
  @Input() msg: string = 'not implemented';

  receiveCustomData($event: any) {
    this.msg = $event;
  }

  ngAfterContentInit(): void {
    // this.msg = 'this.child.cabralada';
  }
}
