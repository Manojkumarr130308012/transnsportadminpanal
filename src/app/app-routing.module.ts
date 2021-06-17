import { AuthLayoutComponent } from './layout/app-layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/app-layout/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { CustomerComponent } from './customer/customer.component';
import { KycComponent } from './kyc/kyc.component';
const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/authentication/signin', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'Customer',
        loadChildren: () =>
        import('./customer/customer.module').then(
          (m) => m.CustomerModule
        ),
      },
      {
        path: 'User',
        loadChildren: () =>
        import('./user/user.module').then(
          (m) => m.UserModule
        ),
      },
      {
        path: 'State',
        loadChildren: () =>
        import('./state/state.module').then(
          (m) => m.StateModule
        ),
      },
      {
        path: 'Company',
        loadChildren: () =>
        import('./company/company.module').then(
          (m) => m.CompanyModule
        ),
      },
      {
        path: 'Branch',
        loadChildren: () =>
        import('./branch/branch.module').then(
          (m) => m.BranchModule
        ),
      },
      {
        path: 'Designation',
        loadChildren: () =>
        import('./designation/designation.module').then(
          (m) => m.DesignationModule
        ),
      }, 
      {
        path: 'Speciality',
        loadChildren: () =>
        import('./speciality/speciality.module').then(
          (m) => m.SpecialityModule
        ),
      },
      {
        path: 'Department',
        loadChildren: () =>
        import('./department/department.module').then(
          (m) => m.DepartmentModule
        ),
      },
      {
        path: 'Users',
        loadChildren: () =>
        import('./users/users.module').then(
          (m) => m.UsersModule
        ),
      },
      {
        path: 'GoodsType',
        loadChildren: () =>
        import('./goodstype/goodstype.module').then(
          (m) => m.GoodstypeModule
        ),
      },
      {
        path: 'Vechicle',
        loadChildren: () =>
        import('./vechicle/vechicle.module').then(
          (m) => m.VechicleModule
        ),
      },
      {
        path: 'advance-table',
        loadChildren: () =>
          import('./advance-table/advance-table.module').then(
            (m) => m.AdvanceTableModule
          ),
      },
      {
        path: 'kyc',
        component: KycComponent
      },
      {
        path: 'Kyc_Details',
        component: AuthLayoutComponent,
        loadChildren: () =>
          import('./kycdetails/kycdetails.module').then((m) => m.KycdetailsModule),
      },
      {
        path: 'extra-pages',
        loadChildren: () =>
          import('./extra-pages/extra-pages.module').then(
            (m) => m.ExtraPagesModule
          ),
      },
      {
        path: 'multilevel',
        loadChildren: () =>
          import('./multilevel/multilevel.module').then(
            (m) => m.MultilevelModule
          ),
      },
    ],
  },

  {
    path: 'authentication',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
