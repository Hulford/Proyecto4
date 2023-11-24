import { NgModule } from '@angular/core';
import {  ButtonModule } from 'primeng/button';
//import { MenuModule } from 'primeng/menu';
import { MenubarModule} from 'primeng/menubar'
import {CardModule} from 'primeng/card'
import {FieldsetModule} from 'primeng/fieldset'
import{ PanelModule} from 'primeng/panel'
import { ToolbarModule} from 'primeng/toolbar'


@NgModule({
exports:[
  //MenuModule,
  MenubarModule,
  ButtonModule,
  CardModule,
  FieldsetModule,
  MenubarModule,
  PanelModule,
  ToolbarModule

]
})
export class PrimeNgModule { }
