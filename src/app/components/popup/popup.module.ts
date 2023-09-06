import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopupComponent } from './popup.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [PopupComponent],
  exports: [PopupComponent]
})
export class PopupComponentModule {}