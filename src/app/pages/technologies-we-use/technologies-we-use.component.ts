import { Component, OnInit } from '@angular/core';
import { TechnologiesWeUseItem } from './components/technologies-we-use-item/models/techonologies-we-use-item';
@Component({
  selector: 'app-technologies-we-use',
  templateUrl: './technologies-we-use.component.html',
  styleUrls: ['./technologies-we-use.component.scss']
})
export class TechnologiesWeUseComponent implements OnInit {

  technologies = [
    new TechnologiesWeUseItem(
      'Angular',
      '../../../../assets/angular.png',
      'Angular'),
    new TechnologiesWeUseItem(
      'React',
      '../../../../../assets/react.png',
      'React'),
    new TechnologiesWeUseItem(
      '.NET MVC',
      '../../../../../assets/dotnetmvc.png',
      '.NET MVC'),
    new TechnologiesWeUseItem(
      'Ruby on Rails',
      '../../../../assets/rubyonrails.png',
      'Ruby on Rails'),
    new TechnologiesWeUseItem(
      'WordPress',
      '../../../../assets/wordpress.png',
      'WordPress'),
    new TechnologiesWeUseItem(
      'Drupal',
      '../../../../assets/drupal.png',
      'Drupal'),
    new TechnologiesWeUseItem(
      'Shopify',
      '../../../../assets/shopify.png',
      'Shopify'),
    new TechnologiesWeUseItem(
      'Magento',
      '../../../../assets/magento.png',
      'Magento'),
    new TechnologiesWeUseItem(
      '.NET Core',
      '../../../../assets/dotnetcore.png',
      '.NET Core'),
    new TechnologiesWeUseItem(
      'Node.js',      
      '../../../../assets/nodejs.png',
      'Node.js'),
    new TechnologiesWeUseItem(
      'Google Go',      
      '../../../../assets/googlego.png',
      'Google Go'),
    new TechnologiesWeUseItem(
      'Django',      
      '../../../../assets/django.png',
      'Django'),
    new TechnologiesWeUseItem(
      'Amazon AWS',      
      '../../../../assets/amazonaws.png',
      'Amazon AWS'),
    new TechnologiesWeUseItem(
      'Heroku',      
      '../../../../assets/heroku.png',
      'Heroku'),
    new TechnologiesWeUseItem(
      'Google Cloud',      
      '../../../../assets/googlecloud.png',
      'Google Cloud'),
    new TechnologiesWeUseItem(
      'Microsoft Azure',      
      '../../../../assets/microsoftazure.png',
      'Microsoft Azure'),
    new TechnologiesWeUseItem(
      'SQL Server',      
      '../../../../assets/sqlserver.png',
      'SQL Server'),
    new TechnologiesWeUseItem(
      'MySQL',     
      '../../../../assets/mysql.png',
      'MySQL'),
    new TechnologiesWeUseItem(
      'MongoDB',      
      '../../../../assets/mongodb.png',
      'MongoDB'),
    new TechnologiesWeUseItem(
      'PostgreSQL',      
      '../../../../assets/postgresql.png',
      'PostgreSQL'),
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
