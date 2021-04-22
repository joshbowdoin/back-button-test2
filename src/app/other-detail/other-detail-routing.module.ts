import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherDetailChildCompoment } from './child/child.component';
import { OtherDetailComponent } from './other-detail.component';

const routes: Routes = [
  {
    path: 'child',
    component: OtherDetailChildCompoment,
  },
  {
    path: '',
    component: OtherDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherDetailRoutingModule { }
