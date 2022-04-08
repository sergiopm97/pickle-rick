import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  visibility: boolean = false;
  responsive: boolean = false;

  ngOnInit(): void {
    this.responsive = window.innerWidth <= 768;
  }

  updateVisibility() {
    return (this.visibility = !this.visibility);
  }

  checkResponsive(event: any) {
    this.responsive = event.target.innerWidth <= 768;
    this.visibility = !this.responsive ? false : this.visibility;
  }
}
