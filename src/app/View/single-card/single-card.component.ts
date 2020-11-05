import {Component, HostListener, Input} from '@angular/core';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html'
})
export class SingleCardComponent {

  imageWide: string;
  imageWH: string;

  @Input() item;

  @HostListener('window:resize', ['$event'])
  onResize() {
    switch (true) {
      // Have no mock, and guidelines so set strange values
      case (window.outerWidth < 992): this.imageWide = 'w200'; this.imageWH = '200px'; break;
      case (window.outerWidth >= 640 && window.outerWidth < 992): this.imageWide = 'w400'; this.imageWH = '400px'; break;
      case (window.outerWidth >= 992 && window.outerWidth < 1180): this.imageWide = 'w1080'; this.imageWH = '1080px'; break;
      case (window.outerWidth >= 1180 && window.outerWidth < 2560): this.imageWide = 'w1920'; this.imageWH = '1920px'; break;
      case (window.outerWidth >= 2560): this.imageWide = 'w2560'; this.imageWH = '2560px'; break;
      default: this.imageWide = 'w400'; this.imageWH = '400px'; break;
    }
  }

  constructor() {
    this.onResize();
  }

}
