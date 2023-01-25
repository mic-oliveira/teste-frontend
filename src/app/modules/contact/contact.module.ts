import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ListContactComponent } from './list-contact/list-contact.component';
import {MatCardModule} from "@angular/material/card";
import { FormContactComponent } from './form-contact/form-contact.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListContactComponent,
    FormContactComponent
  ],
    imports: [
        CommonModule,
        ContactRoutingModule,
        MatCardModule,
        FormsModule
    ]
})
export class ContactModule { }
