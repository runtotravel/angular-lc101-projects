import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   active: boolean = true;
   buttonStatus: boolean[] = [true, true, true];

   constructor() { }

   ngOnInit() { }

   reactivateButtons() {
      for (let i = 0; i < this.buttonStatus.length; i++) {
         this.buttonStatus[i] = true;
      }
      return this.buttonStatus;
   }
}
