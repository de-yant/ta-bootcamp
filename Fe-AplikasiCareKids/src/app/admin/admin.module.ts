import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PesanComponent } from './pesan/pesan.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorProviders } from './auth.interceptor';
import { NgxPaginationModule } from "ngx-pagination";
import { SidebarModule } from 'ng-sidebar';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PesanComponent,
    AdminComponent,
    ProfileComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SidebarModule.forRoot()
  ],
  providers: [AuthInterceptorProviders]
})
export class AdminModule { }
