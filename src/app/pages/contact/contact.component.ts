import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    company: new FormControl('Company'),
    name: new FormControl('John Doe', Validators.required),
    email: new FormControl('default@email.com', Validators.required),
    phone: new FormControl('+110000000', Validators.required),
    message: new FormControl('Type your message here', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  click() {
    console.log(this.contactForm.value);

    // can also use this.contactForm.isValid bool
  }

}
