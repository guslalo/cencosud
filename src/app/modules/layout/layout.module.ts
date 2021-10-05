import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { IndexComponent } from './components/index/index.component';
import { MenuComponent } from './components/menu/menu.component';
import { AccountComponent } from './components/account/account.component';
import { BannerComponent } from './components/banner/banner.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { LatestPostsComponent } from './components/latest-posts/latest-posts.component';


@NgModule({
  declarations: [
    IndexComponent,
    MenuComponent,
    AccountComponent,
    BannerComponent,
    SuggestionsComponent,
    LatestPostsComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
