import {Component, Inject, OnInit} from '@angular/core';
import {ServiceInterface} from "../../../interfaces/service-interface";
import {Observable, of} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit {
  contacts: Observable<Array<any>>;
  constructor(@Inject('ServiceInterface') private service: ServiceInterface, private router: Router) { }

  ngOnInit(): void {
    this.service.get(1, '').subscribe((req: any) => {
      this.contacts = of(req.data);
    });
  }

  edit(id: string) {
    this.router.navigate([`contacts/${id}`]).then()
  }

  delete(id: string) {
    this.service.delete(id).subscribe(() => {
    })
  }

}
