import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'tabs',
  //   // component: TabsPage,
  //   children: [
  //     {
  //       path: 'tab1',
  //       loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  //     },
  //     {
  //       path: 'tab2',
  //       loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  //     },
  //     {
  //       path: 'tab3',
  //       loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
  //     },
  //     {
  //       path: '',
  //       redirectTo: '/tabs/tab1',
  //       pathMatch: 'full'
  //     }
  //   ]
  // },
  // {
  //   path: '',
  //   redirectTo: '/tabs/tab1',
  //   pathMatch: 'full'
  // },
  {
    path: 'other-detail',
    loadChildren: () => import('./other-detail/other-detail.module').then(m => m.OtherDetailModule)
  },
  {
    path: 'more-details',
    loadChildren: () => import('./more-details/more-details.module').then(m => m.MoreDetailsModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      enableTracing: true,
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
