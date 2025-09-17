import { Component, inject } from '@angular/core';
import { filter, from, interval, map, Observable, of, startWith, take, timer } from 'rxjs';
import { FetchBookService } from '../../../services/fetch-books-service/fetch-book-service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BookGrid } from '../../book-grid/book-grid';

@Component({
  selector: 'app-main',
 imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatIconModule,
    BookGrid
  ],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {
  searchControl = new FormControl('');


  filteredBooks!: Observable<any>;
  selectedBooks: any[] = [];

  ngOnInit() {
;
  }

  private _filter(value: string) {

  }

  selectBook(title: string) {
    
}

}