import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './lazy-image.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
//  changeDetection: ChangeDetectionStrategy.Default,
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!: string;

  @Input()
  public alt!: string;

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url)
      throw new Error('URL property is required');
  }

  onLoad() {
    setTimeout(() => { this.hasLoaded = true}, 1000);
//    console.log('has loaded')
  }

}
