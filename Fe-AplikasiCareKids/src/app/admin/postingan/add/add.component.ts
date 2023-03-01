import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

//services
import { AdminService } from '../../admin.service';

//class
import { Posting } from '../../classes/addPost';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  // addForm = new FormGroup({
  //   title: new FormControl('', Validators.required),
  //   description: new FormControl('', Validators.required),
  //   content: new FormControl('', Validators.required),
  //   category_id: new FormControl('', Validators.required),
  //   thumbnail: new FormControl(''),
  // });

  file: any;
  myFiles: any;
  posting: any;
  addForm: any;

  constructor(private adminData: AdminService, private route: Router) { }

  ngOnInit(): void {

  }

  thumbnail(event: any) {
    this.myFiles = event.target.files;
    this.file = this.myFiles[0];
    console.log(this.file);
  }
  // img(event: any) {
  //   if (event.target.files) {
  //     for (let i = 0; i < event.target.files.length; i++) {
  //       var reader = new FileReader();
  //       reader.readAsDataURL(event.target.files[i]);
  //       reader.onload = (event: any) => {
  //         this.posting = event.target.result;
  //       }
  //     }
  //     this.adminData.addPostinganPublic(event.target.files).subscribe((res: any) => {
  //       this.posting = Array.of(res.data);
  //     });
  //   }
  // var file = event.target.files[0];
  // const addForm = new FormData();
  // addForm.append('file', file, file.name);

  // this.adminData.addPostinganPublic(addForm).subscribe((res: any) => {
  //   this.thumbnail = res.toString();
  // });


  addPostPublic() {
    // const addForm = new FormData();
    // addForm.append('title', this.addForm.value.title);
    // addForm.append('description', this.addForm.value.description);
    // addForm.append('content', this.addForm.value.content);
    // addForm.append('category_id', this.addForm.value.category_id);
    // addForm.append('thumbnail', this.file, this.file.name);

    // console.log(addForm);


    this.adminData.addPostinganPublic(this.addForm.value).subscribe((res: any) => {
      this.posting = Array.of(res.data);
      this.route.navigate(['/admin/postingan']);
    });
  }

  // addPostDraft() {
  //   this.adminData.addPostinganDraft(this.addForm.value).subscribe((res: any) => {
  //     this.posting = Array.of(res.data);
  //     this.route.navigate(['/admin/postingan']);
  //   });
  // }



}
