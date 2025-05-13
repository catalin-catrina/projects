import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() cardContainerTitle!: string;
  @Input() isDisabled!: boolean;
  @Output() isDisabledEmitter = new EventEmitter<boolean>();

  colors: string[] = ['blue', 'green', 'yellow', 'red', 'orange'];
  cardBackgroundColor = '#2e5da4';

  handleClick(color: string) {
    switch (color) {
      case 'blue':
        this.cardBackgroundColor = '#2e5da4';
        break;
      case 'green':
        this.cardBackgroundColor = '#008542';
        break;
      case 'yellow':
        this.cardBackgroundColor = '#ffa000';
        break;
      case 'red':
        this.cardBackgroundColor = '#d62839';
        break;
      case 'orange':
        this.cardBackgroundColor = '#ff7700';
        break;
      default:
        this.cardBackgroundColor = '#2e5da4';
        break;
    }
  }

  handleClose() {
    this.isDisabledEmitter.emit(true);
  }
}
