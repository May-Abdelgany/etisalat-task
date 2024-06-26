import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { AllJobsComponent } from './all-jobs.component';
import { AllJob } from '../../models/allJobs.interface';

describe('AllJobsComponent', () => {
  let component: AllJobsComponent;
  let fixture: ComponentFixture<AllJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanvasJSAngularChartsModule], // Import CanvasJSAngularChartsModule here
      providers: [AllJobsComponent], // If necessary, add providers here
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize chartOptions correctly when data is provided', () => {
    const mockData: AllJob[] = [
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
    ];

    component.data = mockData;
    component.ngOnInit();

    expect(component.chartOptions).toBeDefined();
    expect(component.chartOptions.title.text).toEqual(`100 % `);
    expect(component.chartOptions.data.length).toBe(1);
    expect(component.chartOptions.data[0].dataPoints).toEqual(mockData);
  });

  it('should not initialize chartOptions when data is not provided', () => {
    component.ngOnInit();
    expect(component.chartOptions).toBeUndefined();
  });
});
