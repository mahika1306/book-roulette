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
interface Book {
  title: string;
  author: string;
  cover: string;
}
@Component({
  selector: 'app-main',
 imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {
  searchControl = new FormControl('');
  books: Book[] = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', cover: 'https://picsum.photos/200?random=1' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', cover: 'https://picsum.photos/200?random=2' },
    { title: '1984', author: 'George Orwell', cover: 'https://picsum.photos/200?random=3' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', cover: 'https://picsum.photos/200?random=4' },
    { title: 'Harry Potter', author: 'J.K. Rowling', cover: 'https://picsum.photos/200?random=5' }
  ];

  filteredBooks!: Observable<Book[]>;
  selectedBooks: Book[] = [];

  ngOnInit() {
    this.filteredBooks = this.searchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
  }

  private _filter(value: string): Book[] {
    const filterValue = value.toLowerCase();
    return this.books.filter(book =>
      book.title.toLowerCase().includes(filterValue)
    );
  }

  selectBook(title: string) {
    const book = this.books.find(b => b.title === title);
    if (book && !this.selectedBooks.includes(book)) {
      this.selectedBooks.push(book);
    }
    this.searchControl.setValue(''); // clear input after selection
  }  

}

