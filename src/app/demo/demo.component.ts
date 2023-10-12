import { Component } from '@angular/core';
import { ISpringPage } from 'm-basic-ui';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent {
  pageLastChangedTo: number = -1;

  protected activePage: BehaviorSubject<ISpringPage> =
    new BehaviorSubject<ISpringPage>({
      empty: false,
      first: false,
      last: false,
      number: 5,
      numberOfElements: 0,
      pageable: {
        offset: 0,
        pageNumber: 0,
        pageSize: 0,
        paged: false,
        sort: {
          empty: false,
          sorted: false,
          unsorted: false,
        },
        unpaged: false,
      },
      size: 0,
      totalElements: 10,
      totalPages: 10,
    });

  handlePageChange(pageNumber: number): void {
    console.log(`Changed page to: ${pageNumber}`);
    this.pageLastChangedTo = pageNumber;
  }
}
