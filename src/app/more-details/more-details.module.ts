import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MoreDetailsRoutingModule } from './more-details-routing.module';
import { MoreDetailsChildComponent } from './child/child.component';
import { MoreDetailsComponent } from './more-details.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MoreDetailsRoutingModule,
  ],
  declarations: [
    MoreDetailsComponent,
    MoreDetailsChildComponent,
  ]
})
export class MoreDetailsModule { }
