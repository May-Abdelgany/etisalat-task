import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Activities } from '../../models/activities.interface';
import { DataService } from '../../services/data.service';
import { Job } from '../../models/job.interface';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss',
})
export class ActivitiesComponent {
  @Input() data!: Activities;
  jobs!: Job[];
  constructor(private _DataService: DataService) {}
  ngOnInit() {
    this.jobs = this.data.data;
    this.search();
  }
  search() {
    this._DataService.searchKey.subscribe((res) => {
      if (this.jobs) {
        this.jobs = this.data.data;
        this.jobs = this.jobs.filter((element: Job) => {
          return element.title.includes(res);
        });
      }
    });
  }
}
