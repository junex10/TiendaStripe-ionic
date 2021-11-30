import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {}
  
  backStore = () => this.route.navigate(['/store'])
}
