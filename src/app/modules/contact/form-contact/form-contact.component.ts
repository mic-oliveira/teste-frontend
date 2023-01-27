import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, of} from "rxjs";
import {ServiceInterface} from "../../../interfaces/service-interface";
import {NgForm} from "@angular/forms";
import * as sweetalert2 from "sweetalert2";

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {
 private id;
  contact:any = {type_id: 1};
  contactTypes: Observable<Array<any>>
  constructor(@Inject('ServiceInterface') private service: ServiceInterface,
              private activatedRoute: ActivatedRoute,
              @Inject('ServiceInterface2') private serviceType: ServiceInterface
  ) {
  }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    if (this.id != 'create') {
      this.service.find(this.id).subscribe((req: any) => {
        console.log(req.data)
        this.contact = req.data
      })
    }

    this.serviceType.get(null,null).subscribe((x) => {
      this.contactTypes = of(x.data);
    })
  }

  submit(form: NgForm) {
    if (this.id == 'create') {
        return this.service.create(form.value).subscribe((x) => {
            console.log(x.data)
        })
    }
    return this.service.update(form.value, this.id).subscribe((x) => {
        console.log(x.data)
    })

  }
}
