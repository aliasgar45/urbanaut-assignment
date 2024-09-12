import { Component } from '@angular/core';

@Component({
  selector: 'app-city-explorer',
  templateUrl: './city-explorer.component.html',
  styleUrls: ['./city-explorer.component.css']
})
export class CityExplorerComponent {
  cities = [
    { name: 'GOA', image: 'assets/goa.png' },
    { name: 'MUMBAI',  image: 'assets/goa.png'},
    { name: 'DELHI',  image: 'assets/goa.png'}
  ];
  currentIndex = 0;

  nextCity() {
    this.currentIndex = (this.currentIndex + 1) % this.cities.length;
  }

  prevCity() {
    this.currentIndex = (this.currentIndex - 1 + this.cities.length) % this.cities.length;
  }

  get currentCity() {
    return this.cities[this.currentIndex];
  }

  get progressWidth() {
    return `${((this.currentIndex + 1) / this.cities.length) * 100}%`;
  }
}