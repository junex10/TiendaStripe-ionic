import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from 'src/app/shared/tabs/tabs.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { NewClientComponent } from './new-client/new-client.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent
  },
  {
    path: 'client-detail/:id',
    component: ClientDetailComponent
  },
  {
    path: 'new-client',
    component: NewClientComponent
  }
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientModule { }
