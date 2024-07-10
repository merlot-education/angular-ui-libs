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
  @Input() blueHeader: boolean = false; // primary | secondary (see component style file)

  hasContent(templateRef: any): boolean {
    const element: HTMLElement = templateRef.elementRef.nativeElement;
    return element && element.childNodes.length > 0;
  }
}
