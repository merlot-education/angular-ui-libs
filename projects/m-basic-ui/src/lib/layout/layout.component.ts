import { Component } from '@angular/core';

import { freeSet } from '@coreui/icons';

@Component({
  selector: 'm-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
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
}
