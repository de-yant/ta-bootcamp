import { Component, OnInit } from '@angular/core';

//services
import { AdminService } from '../../admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  postingan: any;
  constructor(private adminService: AdminService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    id && this.adminService.getPostingan(id).subscribe((res: any) => {
      this.postingan = Array.of(res.data);
    }, (err: any) => {
    });
  }


}
