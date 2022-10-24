import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    company: new FormControl('Company', Validators.required),
    name: new FormControl('Company', Validators.required),
    email: new FormControl('default@email.com', Validators.required),
    phone: new FormControl('Company', Validators.required),
    message: new FormControl('default@email.com', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

}
