import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: '../pages/login/login.module#LoginPageModule'},/*,  
  { path: 'menu', loadChildren: '../pages/menu/menu.module#MenuPageModule'},   
  { path: 'details', loadChildren:  './pages/todo-details/todo-details.module#TodoDetailsPageModule'},
  { path: 'details/:id', loadChildren:  './pages/todo-details/todo-details.module#TodoDetailsPageModule'},
  { path: 'flutter', loadChildren:  './pages/flutter/flutter.module#FlutterPageModule'},
  { path: 'ionic', loadChildren:  './pages/ionic/ionic.module#IonicPageModule'},
  { path: 'ionic/:id', loadChildren:  './pages/ionic/ionic.module#IonicPageModule'},
  { path: 'cadastro', loadChildren: './pages/cadastro/cadastro.module#CadastroPageModule'},
  { path: 'cadastro/:id', loadChildren: './pages/cadastro/cadastro.module#CadastroPageModule'},*/
  {
    path: 'login',
    loadChildren: () => import('../pages/login/login.module').then( m => m.LoginPageModule)
  }/*,
  {
    path: 'register',
    loadChildren: () => import('../pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../members/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../members/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  }*/,
  {
    path: 'autentication',
    loadChildren: () => import('../services/authentication.service').then( m => m.AuthenticationService)
  },
  {
    path: 'auth-guard',
    loadChildren: () => import('../services/auth-guard.service').then( m => m.AuthGuardService)
  }/*,
  {
    path: 'cadastro',
    loadChildren: () => import('../pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  }*/
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
