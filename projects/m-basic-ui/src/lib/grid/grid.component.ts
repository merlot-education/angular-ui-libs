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
