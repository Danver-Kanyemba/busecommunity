import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-fab-menu-click',
  templateUrl: './fab-menu-click.page.html',
  styleUrls: ['./fab-menu-click.page.scss'],
})
export class FabMenuClickPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  openMenu(){
    this.menu.open('piz');
    console.log('should be opened');
    
  }
}
