import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Books } from './books/books';
interface Book {
  title: string;
  author: string;
  cover: string;
}
@Component({
  selector: 'app-book-grid',
  imports: [CommonModule,Books],
  templateUrl: './book-grid.html',
  styleUrl: './book-grid.css'
})

export class BookGrid {
  books: Book[] = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', cover: 'https://picsum.photos/200?random=1' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', cover: 'https://picsum.photos/200?random=2' },
    { title: '1984', author: 'George Orwell', cover: 'https://picsum.photos/200?random=3' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', cover: 'https://picsum.photos/200?random=4' },
    { title: 'Harry Potter', author: 'J.K. Rowling', cover: 'https://picsum.photos/200?random=5' }
  ];
}
