import { WhatsappDataService } from './../whatsapp-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whatsapp-groups',
  templateUrl: './whatsapp-groups.page.html',
  styleUrls: ['./whatsapp-groups.page.scss'],
})
export class WhatsappGroupsPage implements OnInit {
  whatsappGroups$;
  noOfLoading= [1,2,3,4,5];
  constructor(
    private whatsappGroupService: WhatsappDataService
    ) { }

  ngOnInit() {
    this.whatsappGroups$ = this.whatsappGroupService.whatsappGroups$;
  }

  clickWhatsapp(){
    window.open('https://wa.me/+263784017784');
  }
}
