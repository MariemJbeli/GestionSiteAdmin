import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private http: ServiceService) { }

  ngOnInit(): void {
  }

  reg(): void {
    this.router.navigate(["register"]);
  }
  user = {
    email: '',
    password: '',
  };

  submitLogin() {
    console.log(this.user);

    this.http.logIn(this.user).subscribe(
      (res: any) => {
        if (res.success) {
          localStorage.setItem('username', this.user.email);
          localStorage.setItem('JWT', res.token);
          console.log(res);

          this.router.navigate(['/dashboard']);

        }
      }
    );
  }
  submitLoginC() {

          this.router.navigate(['/loginClient']);

        }
}
