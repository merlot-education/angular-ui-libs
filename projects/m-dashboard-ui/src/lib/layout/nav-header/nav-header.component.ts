import { Component, Input } from '@angular/core';

import { iconSubset } from '../icons-subset';
import { IconSetService } from '@coreui/icons-angular';

@Component({
  selector: 'm-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
})
export class NavHeaderComponent {
  @Input() sidebarId: string = 'sidebar';
  authService = { isLoggedIn: true };

  constructor(public iconSet: IconSetService) {
    iconSet.icons = iconSubset;
  }
}
