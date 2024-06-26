import { Component, Input } from '@angular/core';
import { Job } from '../../models/job.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() data!: Job;
  ngOnInit() {
  }
}
