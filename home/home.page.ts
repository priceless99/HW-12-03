import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {

  }

  catPower() {
    this.alert();
  }

  alert() {
    alert('Why did you touch the button?')
    console.log("Why did you click on this?")
  }

}
