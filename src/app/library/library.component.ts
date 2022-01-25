import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.less'],
})
export class LibraryComponent implements OnInit {
  HEROES: string[] = [
    'Harry Potter',
    'Harry Potter 1',
    'Harry Potter 2',
    'Harry Potter 3',
    'Harry Potter 4',
  ];

  isAddBookModalOpen = false;

  constructor() {}

  ngOnInit(): void {}

  openAddBookModal() {
    this.isAddBookModalOpen = !this.isAddBookModalOpen;
  }
}
