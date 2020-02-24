import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesPage } from './categories.page';
import { CategoryProductsComponent } from './category-products/category-products.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesPage
  },
  {
    path: ":categoryId",
    component: CategoryProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesPageRoutingModule {}
