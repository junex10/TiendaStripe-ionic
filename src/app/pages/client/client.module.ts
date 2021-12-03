import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from 'src/app/shared/tabs/tabs.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent
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
