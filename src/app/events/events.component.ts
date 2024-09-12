import { Component, HostListener, OnInit } from '@angular/core';

interface Card {
  image: string;
  label?: string;
  title: string;
  author: string;
  date: string;
  price: string;
  isLiked?: boolean; // To track if the card is liked
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  sections = [
    { title: 'Events', subtitle: 'Ticket sales' },
    { title: 'Experiences', subtitle: '' },
    { title: "Editor's pick", subtitle: '' },
  ];

  cards: Card[] = [
    {
      image: 'assets/img1.png',
      label: 'URBANAUT ORIGINAL',
      title: 'Experience title goes here maximum 45 characters',
      author: 'Experience Creator',
      date: 'Dec 22',
      price: 'INR 2500',
      isLiked: false,
    },
    {
      image: 'assets/img2.png',
      label: 'URBANAUT ORIGINAL',
      title: 'Experience title goes here maximum 45 characters',
      author: 'Experience Creator',
      date: 'Dec 22',
      price: 'INR 2500',
      isLiked: false,
    },
    {
      image: 'assets/img3.png',
      label: 'URBANAUT ORIGINAL',
      title: 'Experience title goes here maximum 45 characters',
      author: 'Experience Creator',
      date: 'Dec 22',
      price: 'INR 2500',
      isLiked: false,
    },
    {
      image: 'assets/img1.png',
      label: 'URBANAUT ORIGINAL',
      title: 'Experience title goes here maximum 45 characters',
      author: 'Experience Creator',
      date: 'Dec 22',
      price: 'INR 2500',
      isLiked: false,
    },
    {
      image: 'assets/img2.png',
      label: 'URBANAUT ORIGINAL',
      title: 'Experience title goes here maximum 45 characters',
      author: 'Experience Creator',
      date: 'Dec 22',
      price: 'INR 2500',
      isLiked: false,
    },
    {
      image: 'assets/img3.png',
      label: 'URBANAUT ORIGINAL',
      title: 'Experience title goes here maximum 45 characters',
      author: 'Experience Creator',
      date: 'Dec 22',
      price: 'INR 2500',
      isLiked: false,
    },
    {
      image: 'assets/img1.png',
      label: 'URBANAUT ORIGINAL',
      title: 'Experience title goes here maximum 45 characters',
      author: 'Experience Creator',
      date: 'Dec 22',
      price: 'INR 2500',
      isLiked: false,
    },
    {
      image: 'assets/img2.png',
      label: 'URBANAUT ORIGINAL',
      title: 'Experience title goes here maximum 45 characters',
      author: 'Experience Creator',
      date: 'Dec 22',
      price: 'INR 2500',
      isLiked: false,
    },
    {
      image: 'assets/img3.png',
      title: 'Experience title goes here maximum 45 characters',
      author: 'Experience Creator',
      date: 'Dec 23',
      price: 'INR 3000',
      isLiked: false,
    },
    // More cards...
  ];

  currentIndex = 0;
  cardWidth = 390; // Card width in pixels
  containerWidth = 0;
  visibleCards = 0;

  activeSection: number = 0;

  ngOnInit() {
    this.updateContainerWidth();
    this.setupInfiniteScroll();
  }

  setupInfiniteScroll() {
    // Duplicate the cards to create an infinite scroll effect
    this.cards = [...this.cards, ...this.cards, ...this.cards];
  }

  @HostListener('window:resize')
  onResize() {
    this.updateContainerWidth();
  }

  updateContainerWidth() {
    const viewportWidth = window.innerWidth;
    this.containerWidth = viewportWidth; // Set container width to full viewport width
    this.visibleCards = Math.ceil(viewportWidth / this.cardWidth);
    this.currentIndex = this.visibleCards;
  }

  next() {
    this.currentIndex++;
    this.checkBoundary();
  }

  prev() {
    this.currentIndex--;
    this.checkBoundary();
  }

  checkBoundary() {
    const totalCards = this.cards.length;
    const middleIndex = Math.floor(totalCards / 3);

    if (this.currentIndex >= totalCards - this.visibleCards) {
      this.currentIndex = middleIndex;
    } else if (this.currentIndex < 0) {
      this.currentIndex = middleIndex - this.visibleCards;
    }
  }

  getTransform(): string {
    const translateX = -this.currentIndex * this.cardWidth;
    return `translateX(${translateX}px)`;
  }

  toggleLike(card: Card) {
    card.isLiked = !card.isLiked;
  }

  setActiveSection(index: number) {
    this.activeSection = index;
  }
}
