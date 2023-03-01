import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

//services
import { AdminService } from '../../admin.service';

//class
import { Posting } from '../../classes/addPost';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  editForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    category_id: new FormControl('', Validators.required),
    status_id: new FormControl('', Validators.required),
    // thumbnail: new FormControl('', Validators.required)
  });

  images: any = [];

  constructor(private adminData: AdminService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getCurrentPost(this.route.snapshot.params['id']);
    this.getImages(this.route.snapshot.params['id']);
  }

  getCurrentPost(id: any) {
    this.adminData.getCurrentPost(id).subscribe((res: any) => {
      this.editForm = new FormGroup({
        title: new FormControl(res.data['title']),
        description: new FormControl(res.data['description']),
        content: new FormControl(res.data['content']),
        category_id: new FormControl(res.data['category_id']),
        status_id: new FormControl(res.data['status_id']),
        // thumbnail: res.thumbnail
      });
    });
  }


  editPostPublic() {
    this.adminData.editPostPublic(this.route.snapshot.params['id'], this.editForm.value).subscribe(() => {
      this.router.navigate(['/admin/postingan/draft']);
    });
  }

  getImages(article_id: string) {
    this.adminData.getImage(article_id).subscribe((res: any) => {
      this.images = res.data;
    });
  }
}
