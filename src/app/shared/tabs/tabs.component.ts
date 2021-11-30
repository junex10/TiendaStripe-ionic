import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  section: string;

  constructor(
    private route: Router
  ) { 
    this.section = this.route.url;
  }

  ngOnInit() {}

}
