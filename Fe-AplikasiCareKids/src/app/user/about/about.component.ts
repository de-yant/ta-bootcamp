import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title = 'Tentang Kami';

  about: any;
  constructor(private aboutData: UserService) {
    this.aboutData.getAbout().subscribe((res: any) => {
      this.about = res.data;
    });
  }
}
