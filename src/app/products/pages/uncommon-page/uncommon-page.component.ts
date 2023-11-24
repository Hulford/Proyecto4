import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Hulford';
  public gender: 'male' | 'female' = 'male';
 public invitationMap = {
  'male': 'invitarlo',
  'female': 'invitarla'
 }
  changeClient():void{
    this.name= 'melissa';
    this.gender= 'female';
  }

}
