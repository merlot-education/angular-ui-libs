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

import { freeSet } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons-subset';
import { IRoleNavData, OrganizationRoleLayoutData } from './_nav';

@Component({
  selector: 'm-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  @Input() public logoUrlWide: string = '';
  @Input() public logoUrlNarrow: string = '';
  @Input() public logoAltText: string = '';
  @Input() public userAvatarUrl: string = '';

  @Input() public isLoggedIn: boolean = false;
  @Input() public displayName: string = '';

  @Input() public navItems: IRoleNavData[] = [];

  @Input() public organizationRoles: OrganizationRoleLayoutData[] = [];
  @Input() public activeRole: string = '';

  @Output() public loginClicked = new EventEmitter<void>();
  @Output() public logoutClicked = new EventEmitter<void>();

  @Output() public selectedRoleChanged = new EventEmitter<any>();

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  icons = freeSet;

  constructor(public iconSet: IconSetService) {
    this.iconSet.icons = iconSubset;
  }

  login() {
    console.log('login clicked');
    this.loginClicked.emit();
  }
}
