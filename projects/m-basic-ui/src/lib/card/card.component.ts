import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { CardModule, GridModule } from '@coreui/angular';

@Component({
  selector: 'm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [CommonModule, CardModule, GridModule],
})
export class CardComponent {
  @Input() title: string = '';
  @Input() markAs: string = ''; // primary | secondary (see component style file)

  hasContent(templateRef: any): boolean {
    const element: HTMLElement = templateRef.elementRef.nativeElement;
    return element && element.childNodes.length > 0;
  }
}
