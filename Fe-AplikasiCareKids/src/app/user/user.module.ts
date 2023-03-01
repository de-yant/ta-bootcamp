import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'ng-sidebar';

//my modules
import { moduleMe } from './modules/modules';

//services
import { UserService } from './services/user.service';

//routing
import { UserRoutingModule } from './user-routing.module';

//pages
import { BerandaComponent } from './beranda/beranda.component';
import { UserComponent } from './user.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { CarouselComponent } from './beranda/carousel/carousel.component';

@NgModule({
  declarations: [
    BerandaComponent,
    UserComponent,
    NewsComponent,
    ContactComponent,
    AboutComponent,
    EducationComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SidebarModule.forRoot(),
    moduleMe
  ],
  providers: [UserService],
})
export class UserModule { }
