import { Component, OnInit } from '@angular/core';
import { WhatWeDoItem } from './components/what-we-do-item/models/what-we-do-item';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss']
})
export class WhatWeDoComponent implements OnInit {

  items = [
    new WhatWeDoItem(
      'Mobile', 
      '../../../../assets/custom.png', 
      'Mobile app development services', 
      'For businesses of all sizes and industries, we can custom design an application to fit your needs.'),
    new WhatWeDoItem(
      'Desktop Apps', 
      '../../../../../assets/desktop.png', 
      'Desktop app development services', 
      'For businesses of all sizes and industries, we can engineer an  application to fit your needs.'),
    new WhatWeDoItem(
      'Software Consulting', 
      '../../../../../assets/software.png', 
      'Software consulting', 
      'Software consulting is most often used when a company needs an outside, expert opinion regarding a business decision.'),
    new WhatWeDoItem(
      'Small Business Websites', 
      '../../../../../../assets/sbw.png', 
      'Mobile app development services', 
      'WordPress is a free and open-source content management system written in PHP and paired with a MySQL or MariaDB database. Software consulting is most often used when a company needs an outside, expert opinion regarding a business decision.'),
    new WhatWeDoItem(
      'Custom Software', 
      '../../../../../../assets/custom.png', 
      'Custom software development services', 
      'We are here to help you with everything from building an e-commerce application to developing the most complex web-based internet applications or social network. We can engineer a system from the ground up, customize open source software, or update your existing application. We can customize everything for you.'),
    new WhatWeDoItem(
      'Web Apps', 
      '../../../../../../../assets/help.png', 
      'Web App development', 
      'We are here to help you with everything from building an e-commerce application to developing the most complex web-based internet applications or social network. We can engineer a system from the ground up, customize open source software, or update your existing application. We can customize everything for you.')
  ];
  
  constructor() { }

  ngOnInit(): void {

  }

}
