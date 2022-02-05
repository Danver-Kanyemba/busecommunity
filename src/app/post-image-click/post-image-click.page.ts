import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PostImageMaximizeService } from '../post-image-maximize.service';

@Component({
  selector: 'app-post-image-click',
  templateUrl: './post-image-click.page.html',
  styleUrls: ['./post-image-click.page.scss'],
})
export class PostImageClickPage implements OnInit {
  urlForPostImage: string;
  constructor(
    private postImageMaximizeService: PostImageMaximizeService,
    private menu: MenuController
  ) { }

  ngOnInit() {
    this.urlForPostImage = this.postImageMaximizeService.getUrlForImg;

  }

  get getPo(){
    this.urlForPostImage = this.postImageMaximizeService.getUrlForImg;
    return this.urlForPostImage;
  }

  closeMenu(){
    this.menu.close('imagePost');
  }
}
