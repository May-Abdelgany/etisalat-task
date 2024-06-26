import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  constructor(private _DataService: DataService) {}
  search(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this._DataService.searchKey.next(inputElement?.value);
  }
}
