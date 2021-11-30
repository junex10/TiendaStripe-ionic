import { Component, OnInit, Input, Output, ViewEncapsulation } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CameraComponent implements OnInit {

  options: CameraOptions;
  tmpImage: string;

  constructor(
    private camera: Camera,
    private modal: ModalController
  ) { 
    this.options = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    };
  }

  ngOnInit() {}

  public camara = () => {
    this.camera.getPicture(this.options).then( ( imageData ) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.tmpImage = base64Image;
     }, (err) => {
      // Handle error
     });

  }

  close = () => this.modal.dismiss({ 'dismissed': true })

}
