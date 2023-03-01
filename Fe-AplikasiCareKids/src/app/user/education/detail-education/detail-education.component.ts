import { Component, OnInit } from '@angular/core';

//services
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-education',
  templateUrl: './detail-education.component.html',
  styleUrls: ['./detail-education.component.css']
})
export class DetailEducationComponent implements OnInit {


  education: any;
  constructor(private route: ActivatedRoute, private detailData: UserService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    id && this.detailData.getEducationById(id).subscribe((res: any) => {
      this.education = Array.of(res.data);
    }, (err: any) => {
      console.warn(err);
    });
  }



}
