import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//service
import { UserService } from '../../services/user.service';

@Component({
  selector: 'news-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  images: any;
  constructor(private route: ActivatedRoute, private imageList: UserService) {
    let article_id = this.route.snapshot.paramMap.get('id');
    article_id && this.imageList.getImage(article_id).subscribe((res: any) => {
      this.images = res.data;
    });
  }

  ngOnInit() {
  }

}
