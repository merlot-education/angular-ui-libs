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
