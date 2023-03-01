import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  profile = new FormGroup({
    full_name: new FormControl('', Validators.required),
  });

  constructor(private router: Router, public adminService: AdminService, private route: ActivatedRoute) { }

  postLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.getProfileById(this.route.snapshot.params['id']);
  }

  getProfileById(id: any) {
    this.adminService.getProfileById(id).subscribe((res: any) => {
      this.profile = new FormGroup({
        full_name: new FormControl(res.data['full_name'])
      });
    });
  }

}
