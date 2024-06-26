import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  getData() {
    return of({
      all_jobs: [
        {
          name: 'In Progress',
          value: '4 M',
          y: 4,
          color: 'SteelBlue',
          exploded: true,
        },
        {
          name: 'Success',
          value: '2 M',
          y: 2,
          color: 'ForestGreen',
          exploded: true,
        },
        {
          name: 'Failed',
          value: '1 M',
          y: 1,
          color: 'DarkRed',
          exploded: true,
        },
      ],
      dialy_jobs: {
        last_update: '10-04-2020 10:12:40',
        all: 3000,
        success: 1000,
        in_progress: 1000,
        failed: 600,
        retry: 400,
      },
      activities: {
        last_update: '10-04-2020 10:12:40',
        data: [
          {
            title: '2052',
            total_jobs: 100,
            status: 'Action Type',
            date: '10-05-2023 10:12:40',
          },
          {
            title: '2010',
            total_jobs: 50,
            status: 'New Activation',
            date: '14-04-2023 8:10:40',
          },
          {
            title: '1050',
            total_jobs: 80,
            status: 'Action Type',
            date: '10-04-2020 10:12:40',
          },
          {
            title: '1005',
            total_jobs: 105,
            status: 'New Activation',
            date: '14-04-2020 8:10:40',
          },
        ],
      },
    });
  }
}
