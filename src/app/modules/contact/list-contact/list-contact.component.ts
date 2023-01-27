import {Component, Inject, OnInit} from '@angular/core';
import {ServiceInterface} from "../../../interfaces/service-interface";
import {BehaviorSubject, Observable, of, Subject} from "rxjs";
import {Router} from "@angular/router";
import Swal from 'sweetalert2'
@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit {
  search = '';
  contacts: Observable<Array<any>>;
  contactsSubject: BehaviorSubject<any> = new BehaviorSubject<any>('');
  constructor(@Inject('ServiceInterface') private service: ServiceInterface, private router: Router) { }

  ngOnInit(): void {
    this.contactsSubject.subscribe((string: string) => {
      this.loadData(string);
    })

  }

  loadData(search:string = '') {
    this.service.get(1, search).subscribe((req: any) => {
      this.contacts = of(req.data);
    });
  }

  edit(id: string) {
    console.log(id);
    this.router.navigate([`/contacts/${id}`]).then().catch((e) => console.log(e))
  }

  delete(id: string) {
    Swal.fire({
      icon: 'question',
      titleText: 'Deseja excluir o contato?',
      confirmButtonText: 'SIM',
      confirmButtonColor: '#dd6b55',
      showCancelButton: true,
      cancelButtonText: 'NÃO',
      cancelButtonColor: '#3085d6'
    }).then((value) => {
      if (value.isConfirmed) {
        this.service.delete(id).subscribe(() => {
          this.loadData();
          Swal.fire({
            icon: 'success',
            titleText: 'Contato excluído com sucesso.',
          });
        })
      }

    })

  }

  filterContacts() {
    this.contactsSubject.next(this.search);
  }

}
