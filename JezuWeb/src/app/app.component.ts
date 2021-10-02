import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JezuWeb';

  activeMenu(event: Event) {
    console.log('Click', event)
    const navbarBurger = document.getElementById("jezuWebNavBar")
    navbarBurger?.classList.toggle('is-active')
  }
  
}