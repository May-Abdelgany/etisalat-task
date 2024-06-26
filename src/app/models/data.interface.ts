import { Activities } from './activities.interface';
import { AllJob } from './allJobs.interface';
import { DialyJobs } from './dialyJobs.interface';

export interface Root {
  all_jobs: AllJob[];
  dialy_jobs: DialyJobs;
  activities: Activities;
}
