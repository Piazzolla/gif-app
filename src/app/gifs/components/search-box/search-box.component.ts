import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;
  constructor( private gifsService :GifsService) {

  }
  // searchTag(newTag: string) {
  searchTag() {
    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag( newTag );
    this.tagInput.nativeElement.value = '';

  }
}
