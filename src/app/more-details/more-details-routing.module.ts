import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoreDetailsChildComponent } from './child/child.component';
import { MoreDetailsComponent } from './more-details.component';

const routes: Routes = [
  {
    path: 'child',
    component: MoreDetailsChildComponent,
  },
  {
    path: '',
    component: MoreDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoreDetailsRoutingModule { }
