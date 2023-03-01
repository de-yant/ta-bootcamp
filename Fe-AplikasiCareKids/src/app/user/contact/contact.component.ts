import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

//service
import { UserService } from '../services/user.service';

//class
import { Contact } from '../classes/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {

  contactForm = new FormGroup({
    nama: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10,12}')]),
    pesan: new FormControl('', Validators.required)
  });

  alert: boolean = false;
  setting: any;
  constructor(private Data: UserService) {
    this.Data.getSetting().subscribe((res: any) => {
      this.setting = Array.of(res.data);
    });
  }

  onSubmit(contactForm: Contact) {
    this.Data.postContact(contactForm).subscribe((res: any) => {
      this.alert = true;
      this.contactForm.reset();
    })
  }
  closeAlert() {
    this.alert = false;
  }
}
