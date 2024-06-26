import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AllJobsComponent } from '../all-jobs/all-jobs.component';
import { DailyJobsComponent } from '../daily-jobs/daily-jobs.component';
import { ActivitiesComponent } from '../activities/activities.component';
import { DataService } from '../../services/data.service';
import { AllJob } from '../../models/allJobs.interface';
import { DialyJobs } from '../../models/dialyJobs.interface';
import { Activities } from '../../models/activities.interface';
import { Job } from '../../models/job.interface';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    AllJobsComponent,
    DailyJobsComponent,
    ActivitiesComponent,
    HttpClientModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  allJobs!: AllJob[];
  dialyJobs!: DialyJobs;
  activities!: Activities;
  jobs!: Job[];
  constructor(private _DataService: DataService) {}
  ngOnInit() {

    this._DataService.getData().subscribe((res) => {
      this.allJobs = res.all_jobs;
      this.dialyJobs = res.dialy_jobs;
      this.activities = res.activities;
      this.jobs = this.activities.data;
    });
  }

}
