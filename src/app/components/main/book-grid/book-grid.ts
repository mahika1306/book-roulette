import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Books } from './books/books';
interface Book {
  title: string;
  author: string;
  cover: string;
}
@Component({
  selector: 'app-book-grid',
  imports: [Books],
  templateUrl: './book-grid.html',
  styleUrl: './book-grid.css'
})

export class BookGrid {
 @Input() books!: Book[]
}
