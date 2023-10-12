import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'm-test-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent {

}
