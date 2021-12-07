import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from 'src/app/services/index.service';
import { AlertCommon } from 'src/app/shared/commons/alert.common';
import { SpinnerCommon } from 'src/app/shared/commons/spinner.common';
import * as moment from 'moment';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductDetailsComponent implements OnInit {

  editing: boolean = false;
  priceOpen: boolean = true;
  stockOpen: boolean = false;
  categoryOpen: boolean = false;

  image: string = "assets/icon/undraw_profile.svg";
  productName: string;
  stock: number;
  price: number;
  category: string;
  time: string;

  form: FormGroup

  constructor(
    private route: ActivatedRoute,
    private store: StoreService,
    private alert: AlertCommon,
    private spinner: SpinnerCommon,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      price: [null, Validators.required],
      stock: [null, Validators.required],
      category: [null, Validators.required],
      product: [null, Validators.required]
    })
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getProductByProduct(params.product)
    })
  }

  edit = () => this.editing === false ? this.editing = true : this.editing = false;

  selectTab = (tab: string, self: HTMLDivElement) => {
    const tabs = document.getElementsByClassName('tab');
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('actived');
    }
    self.classList.add('actived');
    switch(tab) {
      case 'price':
        this.priceOpen = true;
        this.stockOpen = false;
        this.categoryOpen = false;
      break;
      case 'stock':
        this.priceOpen = false;
        this.stockOpen = true;
        this.categoryOpen = false;
      break;
      case 'category':
        this.priceOpen = false;
        this.stockOpen = false;
        this.categoryOpen = true;
      break;
    }
  }

  getProductByProduct = (product: string) => {
    this.store.getProductByProduct(product)
      .subscribe(
        value => {
          this.productName = value.product;
          this.price = value.price;
          this.stock = value.stock;
          this.image = value.image;
          this.category = value.category;
          this.time = moment(value.createDate).format('DD/MM/YYYY H:M A');
          console.log(this.time);
        },
        () => {
          this.alert.conectionError();
          this.router.navigate(['/store']);
        }
      )
  }

}
