import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationModule } from '@coreui/angular';
import { BehaviorSubject } from 'rxjs';
import { ISpringPage } from './page-data';
import { RouterModule } from '@angular/router';

interface IPageOption {
  target: number;
  text: string;
  disabled: boolean;
  active: boolean;
}

@Component({
  selector: 'm-paginator',
  standalone: true,
  imports: [CommonModule, PaginationModule, RouterModule],
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input() currentPage!: BehaviorSubject<ISpringPage>;
  @Output() private pageChangeEvent = new EventEmitter<number>();

  protected pageOptions!: IPageOption[];

  constructor() {}
  ngOnInit(): void {
    this.currentPage.subscribe((newPage) => {
      console.log('newPage', newPage);
      this.pageOptions = this.updatePageNavigationOptions(
        newPage.pageable.pageNumber,
        newPage.totalPages
      );

      console.log('pageOptions', this.pageOptions);
    });
  }

  private updatePageNavigationOptions(
    activePage: number,
    totalPages: number
  ): IPageOption[] {
    console.log('updatePageNavigationOptions', activePage, totalPages);
    let target = [
      {
        target: 0,
        text: 'Anfang',
        disabled: activePage === 0,
        active: false,
      },
    ];

    let startIndex;
    if (activePage > 0) {
      startIndex =
        activePage === totalPages - 1
          ? Math.max(0, activePage - 2)
          : activePage - 1;
    } else {
      startIndex = activePage;
    }

    for (let i = startIndex; i < Math.min(startIndex + 3, totalPages); i++) {
      target.push({
        target: i,
        text: '' + (i + 1),
        disabled: false,
        active: activePage === i,
      });
    }

    target.push({
      target: totalPages - 1,
      text: 'Ende',
      disabled: activePage === totalPages - 1,
      active: false,
    });
    return target;
  }

  protected handleNavigation(option: IPageOption) {
    if (option.active) {
      return;
    }

    this.pageChangeEvent.emit(option.target);
  }
}
