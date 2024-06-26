import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import { SearchBarComponent } from './search-bar.component';
import { BehaviorSubject } from 'rxjs';

// Mock DataService
class MockDataService {
  searchKey = new BehaviorSubject<string>('');
}

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let dataService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [
        { provide: DataService, useClass: MockDataService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call DataService.searchKey.next() when search() is called', () => {
    const inputValue = 'test';
    spyOn(dataService.searchKey, 'next');
    component.search({ target: { value: inputValue } as unknown } as Event);
    expect(dataService.searchKey.next).toHaveBeenCalledWith(inputValue);
  });
});
