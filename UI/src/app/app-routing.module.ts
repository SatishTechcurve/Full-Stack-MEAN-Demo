import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';


const routes: Routes = [
  { path: '',   redirectTo: 'auth/user/login', pathMatch: 'full' }
  ,{
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'landing',
        loadChildren: () => import('./featured/landing/landing.module').then(m => m.LandingModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./featured/user-management/user-management.module').then(m => m.UserManagementModule)
      },
    ]
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'inventory',
        loadChildren: () => import('./featured/inventory/inventory.module').then(m => m.InventoryModule)
      },
      {
        path: 'create-user',
        loadChildren: () => import('./featured/create-user/components/create-user/create-user.module').then(m => m.CreateUserModule)
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    loadChildren: () => import('./featured/error/error.module').then(m => m.ErrorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
