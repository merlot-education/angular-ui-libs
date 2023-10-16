import { Component, Input } from '@angular/core';

import { freeSet } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons-subset';

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

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  authService = {
    isLoggedIn: true,
    logIn: () => {},
    logOut: () => {},
    userProfile: {
      firstName: 'John',
      lastName: 'Doe',
    },
  };

  icons = freeSet;

  constructor(public iconSet: IconSetService) {
    this.iconSet.icons = iconSubset;
  }
}
