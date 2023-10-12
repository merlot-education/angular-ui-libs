import {
  Component,
  AfterContentInit,
  ContentChildren,
  QueryList,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AccordionModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonModule,
  CardModule,
  CarouselModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  NavModule,
  PaginationModule,
  PlaceholderModule,
  PopoverModule,
  ProgressModule,
  SharedModule,
  SpinnerModule,
  TableModule,
  TabsModule,
  TooltipModule,
  UtilitiesModule,
  ModalModule,
} from '@coreui/angular';

@Component({
  selector: 'm-grid',
  standalone: true,
  imports: [
    CommonModule,
    AccordionModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    CollapseModule,
    DropdownModule,
    FormModule,
    GridModule,
    ListGroupModule,
    NavModule,
    PaginationModule,
    PlaceholderModule,
    PopoverModule,
    ProgressModule,
    SharedModule,
    SpinnerModule,
    TableModule,
    TabsModule,
    TooltipModule,
    UtilitiesModule,
    ModalModule,
  ],
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements AfterContentInit {
  @ContentChildren(ElementRef, { descendants: false })
  children!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {}

  ngAfterContentInit() {
    this.children.forEach((child) => {
      const col = this.renderer.createElement('c-col');
      this.renderer.setAttribute(col, 'xs', '');
      this.renderer.insertBefore(
        child.nativeElement.parentNode,
        col,
        child.nativeElement
      );
      this.renderer.appendChild(col, child.nativeElement);
    });
  }
}
