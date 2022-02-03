import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostImageMaximizeService {

  urlForImage;

  constructor() { }

  set urlForImg(linkUrl){
    this.urlForImage = linkUrl;
  }
  get getUrlForImg(){
    return this.urlForImage;
  }
}
