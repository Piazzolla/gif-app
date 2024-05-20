import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class CardListComponent { }
