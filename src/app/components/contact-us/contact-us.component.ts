import {
  Component,
  OnInit
} from '@angular/core';
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
  constructor(private fb: FormBuilder, ) {
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
          Validators.maxLength(50),
        ],
      ],
    });
  }

  ngOnInit() {}

  submit(value: any) {
    alert(` ${value.firstName} ${value.lastName} ${value.email} ${value.description},  Now this form is demo form I'll integrated with database,  Thank you`);
  }

  isFieldInvalid(fieldName: string) {
    return this.contactForm?.get(fieldName)?.invalid;
  }
}
