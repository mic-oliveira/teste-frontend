import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {
  showErrors = false;
  errorMessage;
  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(form: NgForm) {
    this.auth.auth(form.value).subscribe((x: any) => {
      console.log(x.token);
      localStorage.setItem('token', x.token)
      this.router.navigate(['contacts']).then()
    },(error) => {
      console.log(error.error.message)
      this.errorMessage = error.error.message;
      this.showErrors = true;
    })
  }

}
