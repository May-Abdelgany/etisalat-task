import { Component, Input } from '@angular/core';
import { DialyJobs } from '../../models/dialyJobs.interface';

@Component({
  selector: 'app-daily-jobs',
  standalone: true,
  imports: [],
  templateUrl: './daily-jobs.component.html',
  styleUrl: './daily-jobs.component.scss',
})
export class DailyJobsComponent {
  @Input() data!: DialyJobs;
  constructor() {}
  ngOnInit() {
  }
}
