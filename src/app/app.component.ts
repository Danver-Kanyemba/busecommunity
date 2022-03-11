import { PopOverPage } from './pop-over/pop-over.page';
import { Component, OnInit } from '@angular/core';
import { PostImageMaximizeService } from './post-image-maximize.service';
import { PopoverController } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  urlForPostImage;
  constructor(
    public popoverController: PopoverController,
    ) {
      this.removeSplash();
    }

    ngOnInit(): void {
  }
  async removeSplash(){
   await SplashScreen.hide();
  
  }

async openPopOver(ev){
  const popover = await this.popoverController.create({
    component: PopOverPage,
    event: ev,
    translucent: true,
  });
  return await popover.present();
  }
}
