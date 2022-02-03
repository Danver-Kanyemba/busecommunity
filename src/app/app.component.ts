import { Component } from '@angular/core';
import { PostImageMaximizeService } from './post-image-maximize.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  urlForPostImage;
  constructor(
    private postImageMaximizeService: PostImageMaximizeService

  ) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.urlForPostImage = this.postImageMaximizeService.getUrlForImg;


  }

}
