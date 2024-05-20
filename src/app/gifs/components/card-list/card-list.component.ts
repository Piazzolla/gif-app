import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class CardListComponent {
  @Input()
  public gifs: Gif[] = []
}
