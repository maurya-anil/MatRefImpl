import {Component, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-accordian-demo',
  templateUrl: './accordian-demo.component.html',
  styleUrls: ['./accordian-demo.component.css']
})
export class AccordianDemoComponent {
    @ViewChild(MatAccordion) accordion: MatAccordion = new MatAccordion();
  }

