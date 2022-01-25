import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.less'],
})
export class AddBookComponent implements OnInit {
  constructor() {}

  @Output() closeModalEvent = new EventEmitter<string>();

  ngOnInit(): void {}

  closeModal() {
    this.closeModalEvent.emit();
  }
}
