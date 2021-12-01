import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StoreComponent } from './store/store.component';
import { TabsComponent } from 'src/app/shared/tabs/tabs.component';
import { IonicModule } from '@ionic/angular';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';
import { StoreGuard } from 'src/app/guard/store/store.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NewProductComponent } from './new-product/new-product.component';
import { NewCategoryComponent } from './new-category/new-category.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    canActivate: [StoreGuard]
  },
  {
    path: 'product/details/:id',
    component: ProductDetailsComponent,
    canActivate: [StoreGuard]
  },
  {
    path: 'product/new-product',
    component: NewProductComponent,
    canActivate: [StoreGuard]
  },
  {
    path: 'category/new-category',
    component: NewCategoryComponent,
    canActivate: [StoreGuard]
  }
];
@NgModule({
  declarations: [
    StoreComponent,
    TabsComponent,
    SidebarComponent,
    NewCategoryComponent,
    NewProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule
  ]
})
export class StoreModule { }
