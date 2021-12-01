import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  GetCategoryDTO
} from 'src/app/dtos/dtos.module';
import { StoreService } from 'src/app/services/index.service';
import { AlertCommon } from 'src/app/shared/commons/alert.common';
import { ModalController } from '@ionic/angular';
import { CameraComponent } from 'src/app/shared/camera/camera.component';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})

export class NewProductComponent implements OnInit {

  tempImg: string;
  activedCamera: boolean = false;
  category: GetCategoryDTO[] = [];
  form: FormGroup;
  
  constructor(
    private route: Router,
    private store: StoreService,
    private alert: AlertCommon,
    private fb: FormBuilder,
    public modal: ModalController
  ) {
    this.form = this.fb.group({
      product: [null, Validators.required],
      price: [null, Validators.required],
      stock: [null, Validators.required],
      image: [null, Validators.required]
    })
  }

  ngOnInit() { 
    this.getCategory();
  }

  backStore = () => this.route.navigate(['/store'])

  getCategory = () => {
    this.store.getCategorys()
    .subscribe(
      value => this.category = value,
      () => {
        this.alert.alertPersonalized(
          'connectionError',
          'Error de conexión',
          'Hay un problema de conexión, verifique que su conexión a internet sea estable',
          ['Entendido']
        );
      }
    )
  }
  selectCat = () => {

  }
  choosePhoto = () => {
    this.presentModal()
  }
  async presentModal() {
    const modal = await this.modal.create({
      component: CameraComponent,
      cssClass: 'my-custom-class'
    });
    modal.onDidDismiss()
    .then(image => this.form.get('image').setValue(image.data.result))
    return await modal.present();
  }
}
