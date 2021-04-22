import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3DetailComponent } from './tab3-detail/tab3-detail.component';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: 'detail',
    component: Tab3DetailComponent,
  },
  {
    path: '',
    component: Tab3Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule { }
