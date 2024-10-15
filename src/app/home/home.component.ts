import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isRegister: boolean = true;
  @Output() flush = new EventEmitter<String>();

  toggleIsRegister() {
    this.isRegister = !this.isRegister;
  }

  handleFlush(username: String) {
    this.flush.emit(username);
  }
}
