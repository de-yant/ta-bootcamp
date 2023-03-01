import { Component, OnInit } from '@angular/core';

//services
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.css']
})
export class DetailNewsComponent implements OnInit {

  news: any;
  id: any;
  constructor(private detailData: UserService, private route: ActivatedRoute) {
    this.news = [];
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    id && this.detailData.getNewsById(id).subscribe((res: any) => {
      this.news = Array.of(res.data);
    }, (err: any) => {
      console.warn(err);
    });
  }
}
