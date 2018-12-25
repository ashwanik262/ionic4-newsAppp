import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'newsdetail', loadChildren: './newsdetail/newsdetail.module#NewsdetailPageModule' },
  { path: 'categorynews', loadChildren: './categorynews/categorynews.module#CategorynewsPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
