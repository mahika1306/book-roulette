import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-books',
  imports: [],
  templateUrl: './books.html',
  styleUrl: './books.css'
})
export class Books {
  @Input() book!: { title: string; author: string; cover: string };
  @Input()view:'grid'|'list'='grid';

}
