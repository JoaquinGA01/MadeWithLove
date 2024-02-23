import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-carousel',
    standalone: true,
    imports: [],
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.css'
})
export class CarouselComponent {
    slides: string[];
    i: number;

    constructor() {
        this.i = 0;
        this.slides = [
            './assets/Imagenes-Header/Principal.png',
            './assets/Imagenes-Header/Principal 2.png',
        ];
    }
    getSlide() {
        return this.slides[this.i];
    }

    getPrev() {
        this.i == 0 ? (this.i = this.slides.length - 1) : this.i--;
    }

    getNext() {
        this.i < this.slides.length - 1 ? this.i++ : (this.i = 0);
    }
}
