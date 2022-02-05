import { Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PostImageMaximizeService {

  urlForImage='cc';

  constructor(private menu: MenuController) { }

   urlForImg(linkUrl: string){
    const gg = linkUrl.split('"');
    this.urlForImage = gg[1];
     this.menu.toggle('imagePost');
     console.log(this.urlForImage);
  }
  get  getUrlForImg(){
    return this.urlForImage;
  }
}
