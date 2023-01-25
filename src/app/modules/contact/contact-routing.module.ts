import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListContactComponent} from "./list-contact/list-contact.component";
import {ContactService} from "../../services/contact.service";
import {FormContactComponent} from "./form-contact/form-contact.component";
import {ContactTypeService} from "../../services/contact-type.service";

const routes: Routes = [
  { path: '', component: ListContactComponent },
  { path: ':id', component: FormContactComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
      { provide: 'ServiceInterface', useClass: ContactService },
      { provide: 'ServiceInterface2', useClass: ContactTypeService}
  ]
})
export class ContactRoutingModule { }
