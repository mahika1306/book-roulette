import { Component, inject } from '@angular/core';
import { filter, from, interval, map, Observable, of, startWith, take, timer } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BookGrid } from './book-grid/book-grid';
import { Books } from './book-grid/books/books';
interface Book {
  title: string;
  author: string;
  cover: string;
}

@Component({
  selector: 'app-main',
 imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatIconModule,
    BookGrid,
    AsyncPipe,
    CommonModule,
    Books
  ],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {
    books: Book[] = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', cover: 'https://picsum.photos/200?random=1' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', cover: 'https://picsum.photos/200?random=2' },
    { title: '1984', author: 'George Orwell', cover: 'https://picsum.photos/200?random=3' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', cover: 'https://picsum.photos/200?random=4' },
    { title: 'Harry Potter', author: 'J.K. Rowling', cover: 'https://picsum.photos/200?random=5' }
  ];
  searchControl = new FormControl('');



  filteredBooks!: Observable<Book[]>;
  selectedBooks: any[] = [];

  ngOnInit() {
    this.filteredBooks=this.searchControl.valueChanges.pipe(
      startWith(''), //loads all books initially
      map(value => this._filter(value || ''))
    );
  }

  private _filter(value: string): Book[] {
    const filterValue = value.toLowerCase();
   return this.books.filter(book => book.title.toLowerCase().includes(filterValue.toLowerCase()));

  }

  selectBook(title: string) {
    if(!this.selectedBooks.find(book => book.title === title)) {
        this.selectedBooks.push(this.books.find(book => book.title === title));
    }
  
    this.searchControl.setValue('');
    
}

}