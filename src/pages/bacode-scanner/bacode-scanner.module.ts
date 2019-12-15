import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BacodeScannerPage } from './bacode-scanner';

@NgModule({
  declarations: [
    BacodeScannerPage,
  ],
  imports: [
    IonicPageModule.forChild(BacodeScannerPage),
  ],
})
export class BacodeScannerPageModule {}
