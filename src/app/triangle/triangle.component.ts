import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.scss'],
  animations: [
    trigger('result', [
      state('disable', style({
        backgroundColor: 'white',        
      })),
      state('enable', style({
        backgroundColor: 'blue',
      })),
      transition('disable => enable', [
        animate('4s')
      ]),
      transition('enable => disable', [
        animate('4s')
      ])
    ])
  ]
})
export class TriangleComponent implements OnInit {
  base = new FormControl('');
  height = new FormControl('');
  area = new FormControl('');
  isVisible = false;
  constructor() { }

  ngOnInit(): void {
  }

  onCalcButtonClick() {
    this.isVisible = true;
    let area = this.calcTriangleArea(this.base.value, this.height.value);
    this.area.setValue(area);
  }
  onDeleteButtonClick() {
    this.isVisible = false;
    this.base.setValue('');
    this.height.setValue('');
    this.area.setValue('');
  }
  calcTriangleArea(base: number, height: number) {
    return base * height / 2;
  }
}
