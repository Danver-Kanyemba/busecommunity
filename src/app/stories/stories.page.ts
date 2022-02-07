import { PostImageMaximizeService } from './../post-image-maximize.service';
import { Component, OnInit } from '@angular/core';
import { IonLabel, MenuController } from '@ionic/angular';
import { StoriesDataService } from '../stories-data.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.page.html',
  styleUrls: ['./stories.page.scss'],
})
export class StoriesPage implements OnInit {
  isThumbsUpVisible= 1;
  test1;
  stories$;

  constructor(
    private menu: MenuController,
    private postImageMaximizeService: PostImageMaximizeService,
    private storiesService: StoriesDataService
    ) {}

    ngOnInit() {
    this.test1 = this.postImageMaximizeService.urlForImage;
    this.stories$ = this.storiesService.stories$;
    }

  linkPicture(input){
    console.log(input.el.style.backgroundImage);
    const gg = input.el.style.backgroundImage.split('"');
    this.postImageMaximizeService.urlForImage = gg[1];
    this.menu.toggle('imagePost');
  }

  showAvatar(input){
    console.log(input);
    const gg = input.src;

    this.postImageMaximizeService.urlForImage = gg;
    this.menu.toggle('imagePost');

  }
  onClick(voted: number){
    this.isThumbsUpVisible = 0;

    if (voted === 1) {
      console.log('voted for Danver');
    }

    if(voted===2) {
      console.log('voted for Danver');
    }
}

}
