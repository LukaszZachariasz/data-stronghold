import { Component, EventEmitter, Output } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-hero-actions',
  templateUrl: './hero-actions.component.html'
})
export class HeroActionsComponent {
  @Output() removeEvent = new EventEmitter();
  @Output() detailsEvent = new EventEmitter();

  tooltipDelay = environment.tooltipTime;

  onDetails(event: Event) {
    event.stopPropagation();
    this.detailsEvent.next();
  }

  onRemove(event: Event) {
    event.stopPropagation();
    this.removeEvent.next();
  }
}
