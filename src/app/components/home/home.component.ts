// home.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loginModal!: NgbModalRef;

  constructor(private router: Router, private modalService: NgbModal) {}

  redirectToTypingGame() {
    this.router.navigate(['/typing-game']);
  }

  handleLoginSuccess() {
    console.log("Cerrando modal...");
    this.modalService.dismissAll(); // Cierra todos los modales abiertos
    this.redirectToTypingGame();
  }

  openLoginModal(content: any) {
    this.loginModal = this.modalService.open(content, { centered: true });
  }
}
