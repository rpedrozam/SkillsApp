import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tabCamera',
        loadChildren: () => import('../camera/camera.module').then(m => m.CameraPageModule)
      },
      {
        path: 'tabList',
        loadChildren: () => import('../list/list.module').then(m => m.ListPageModule)
      },
      {
        path: '',
        redirectTo: 'tabCamera',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabCamera',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
