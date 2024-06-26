// data.service.spec.ts
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { DataService } from './data.service';
import { Root } from '../models/data.interface';
import { of } from 'rxjs';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  const mockData: Root = {
    // Provide the necessary structure and data for your Root interface
    // Example:

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
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verify that no unmatched requests are outstanding.
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve data from the API via GET', () => {
    service.getData().subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(`${service.path}/db`);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('should have a searchKey subject', () => {
    expect(service.searchKey).toBeTruthy();
    service.searchKey.next('test');
    service.searchKey.subscribe((key) => {
      expect(key).toBe('test');
    });
  });
});
