import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './component/product/product.component';
import { ListComponent } from './components/list/list.component';


const routes: Routes = [
  { path: 'list', component: ListComponent},
  { path: 'list/:productId', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
