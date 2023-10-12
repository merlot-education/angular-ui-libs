import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { CardModule, GridModule } from '@coreui/angular';

@Component({
  selector: 'm-card-with-title',
  templateUrl: './card-with-title.component.html',
  styleUrls: ['./card-with-title.component.scss'],
  standalone: true,
  imports: [CommonModule, CardModule, GridModule],
})
export class CardWithTitleComponent {
  @Input() title: string = 'Card Title (change with "title" input)';

  hasContent(templateRef: any): boolean {
    const element: HTMLElement = templateRef.elementRef.nativeElement;
    return element && element.childNodes.length > 0;
  }
}
