import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMobile: boolean = false;
  showMenuButton!: boolean;

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    console.log(window.innerWidth )
    if(window.innerWidth <= 600) this.showMenuButton = true;
  }

  // Chame a função checkScreenSize() também no momento da inicialização do componente
}
