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
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule)
  },
  {
    path: 'user-top-toolbar',
    loadChildren: () => import('./user-top-toolbar/user-top-toolbar.module').then( m => m.UserTopToolbarPageModule)
  },
  {
    path: 'post-image-click',
    loadChildren: () => import('./post-image-click/post-image-click.module').then( m => m.PostImageClickPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
