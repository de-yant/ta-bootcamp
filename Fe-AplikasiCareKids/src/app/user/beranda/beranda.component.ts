import { Component, OnInit } from '@angular/core';

//services
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.component.html',
  styleUrls: ['./beranda.component.css']
})
export class BerandaComponent implements OnInit {

  carousels = [];
  page: number = 1;
  beranda: any;
  top: any;
  education: any;
  about: any;

  constructor(private userData: UserService) {
    this.userData.getAll().subscribe((res: any) => {
      this.userData = res.data;
      this.beranda = res.data.sort((a: any, b: any) => {
        if (a['created_at'] > b['created_at']) {
          return -1;
        } else if (a['created_at'] < b['created_at']) {
          return 1;
        } else {
          return 0;
        }
      }).filter((item: any) => {
        return item['status'] == 'Publish';
      });
    });

    this.userData.getEducation().subscribe((res: any) => {
      this.education = res.data;
      this.education = res.data.sort((a: any, b: any) => {
        if (a['view_count'] > b['view_count']) {
          return -1;
        } else if (a['view_count'] < b['view_count']) {
          return 1;
        } else {
          return 0;
        }
      }).filter((item: any) => {
        return item['status'] == 'Publish';
      }).slice(0, 5);
    });

    this.userData.getAbout().subscribe((res: any) => {
      this.about = res.data;
    });
  }

  ngOnInit(): void {
    this.getCarousel();
  }

  getCarousel() {
    this.userData.getCarousel().subscribe((res: any) => {
      this.carousels = res.data;
    });
  }

}
