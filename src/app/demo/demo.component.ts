/*
 *  Copyright 2024 Dataport. All rights reserved. Developed as part of the MERLOT project.
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

  handleLogin() {
    alert('login clicked');
  }
}
