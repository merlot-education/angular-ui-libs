/*
 *  Copyright 2023-2024 Dataport AöR
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

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
