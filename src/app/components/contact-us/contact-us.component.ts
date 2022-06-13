import {
  Component,
  OnInit
} from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  Subject
} from 'rxjs';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  submitLoader: boolean = false;
  title: string = 'Contact form';
  contactForm: FormGroup;
  private ngUnsubscribe: Subject < any > = new Subject();
  constructor(private fb: FormBuilder, private firestore: AngularFirestore) {
    this.contactForm = this.fb.group({
      firstName: [
        '',
        [
          Validators.required
        ],
      ],
      lastName: [
        '',
        [
          Validators.required
        ],
      ],
      email: [
        '',
        [
          Validators.required,
        ],
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
        ],
      ],
    });
  }

  ngOnInit() {}

  _newId:any;
  submit(value: any) {
    let date = new Date('dd:mm:yyyy HH:mm:ss');
    this.firestore.collection('contact-form').doc(this._newId).set({firstName:this.contactForm.value.firstName,lastName:this.contactForm.value.lastName,email:this.contactForm.value.email, description:this.contactForm.value.description})
      // field: this.contactForm.value.firstName
  .then(res => {
    alert(`Thanks for contacting us through our portal. We resolved your inquiry as soon  as possible.`);
      console.log(res);
      this.contactForm.reset();
  })
  .catch(e => {
      console.log(e);
  })
  }

  isFieldInvalid(fieldName: string) {
    return this.contactForm?.get(fieldName)?.invalid;
  }
}
