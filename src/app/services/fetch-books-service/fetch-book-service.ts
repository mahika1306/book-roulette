import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchBookService {
  http=inject(HttpClient)
  constructor() { }

  getBooks() {
    // Logic to fetch books from an API or database
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q=subject:fiction');
  }

}
