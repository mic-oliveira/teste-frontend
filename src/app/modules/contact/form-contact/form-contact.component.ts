import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, of} from "rxjs";
import {ServiceInterface} from "../../../interfaces/service-interface";

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {

  contact:any
  contactTypes: Observable<Array<any>>
  constructor(@Inject('ServiceInterface') private service: ServiceInterface,
              private activatedRoute: ActivatedRoute,
              @Inject('ServiceInterface2') private serviceType: ServiceInterface
  ) {
    console.log()
  }

  ngOnInit(): void {
    this.service.find(this.activatedRoute.snapshot.paramMap.get('id')).subscribe((req: any) => {
      this.contact = req.data
      console.log(this.contact)
    })
    this.serviceType.get(null,null).subscribe((x) => {
      this.contactTypes = of(x.data);
    })
  }

}
