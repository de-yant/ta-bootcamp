import { Component, OnInit } from '@angular/core';

import { AdminService } from '../../admin.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent implements OnInit {

  images: any;
  constructor(private adminService: AdminService, private route: ActivatedRoute) {
    let article_id = this.route.snapshot.paramMap.get('id');
    article_id && this.adminService.getImage(article_id).subscribe((res: any) => {
      this.images = res.data;
    });
  }

  ngOnInit() {

  }

}
