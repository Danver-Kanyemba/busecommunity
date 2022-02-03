import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'stories',
    loadChildren: () => import('./stories/stories.module').then( m => m.StoriesPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'stories-preview',
    loadChildren: () => import('./stories-preview/stories-preview.module').then( m => m.StoriesPreviewPageModule)
  },
  {
    path: 'houses',
    loadChildren: () => import('./houses/houses.module').then( m => m.HousesPageModule)
  },
  {
    path: 'menuforcommunity',
    loadChildren: () => import('./menuforcommunity/menuforcommunity.module').then( m => m.MenuforcommunityPageModule)
  },
  {
    path: 'busecommunitylogo',
    loadChildren: () => import('./busecommunitylogo/busecommunitylogo.module').then( m => m.BusecommunitylogoPageModule)
  },
  // {
  //   path: 'menuforcommunity/sign-in',
  //   loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  // },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule)
  },
  {
    path: 'groups-slides',
    loadChildren: () => import('./groups-slides/groups-slides.module').then( m => m.GroupsSlidesPageModule)
  },
  {
    path: 'post-on-main',
    loadChildren: () => import('./post-on-main/post-on-main.module').then( m => m.PostOnMainPageModule)
  },
  {
    path: 'fab-menu-click',
    loadChildren: () => import('./fab-menu-click/fab-menu-click.module').then( m => m.FabMenuClickPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
