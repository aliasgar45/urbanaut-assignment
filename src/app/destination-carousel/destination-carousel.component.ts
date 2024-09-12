import { Component, OnInit } from '@angular/core';

interface Destination {
  name: string;
  image: string;
}

@Component({
  selector: 'app-destination-carousel',
  templateUrl: './destination-carousel.component.html',
  styleUrls: ['./destination-carousel.component.css']
})
export class DestinationCarouselComponent implements OnInit {
  destinations: Destination[] = [
    { name: 'GOA', image: 'assets/des1.png' },
    { name: 'LISBON', image: 'assets/des2.png' },
    { name: 'LADAKH', image: 'assets/des3.png' },
    { name: 'MIR', image: 'assets/des4.png' },
  ];

  currentIndex = 0;

  ngOnInit(): void {}

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.destinations.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.destinations.length) % this.destinations.length;
  }

  getIndex(offset: number): number {
    return (this.currentIndex + offset + this.destinations.length) % this.destinations.length;
  }

  getStyle(index: number) {
    const diff = (index - this.currentIndex + this.destinations.length) % this.destinations.length;
    let scale = 1 - (diff * 0.2);
    scale = Math.max(scale, 0.6); // Ensure minimum scale is 0.6

    return {
      'transform': `scale(${scale}) translateX(${diff * 10}%)`,
      'z-index': this.destinations.length - diff,
      'opacity': 1 - (diff * 0.3),
    };
  }
}