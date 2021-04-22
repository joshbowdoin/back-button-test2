import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { OtherDetailRoutingModule } from './other-detail-routing.module';
import { OtherDetailComponent } from './other-detail.component';
import { OtherDetailChildCompoment } from './child/child.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    OtherDetailRoutingModule,
  ],
  declarations: [
    OtherDetailComponent,
    OtherDetailChildCompoment,
  ]
})
export class OtherDetailModule { }
