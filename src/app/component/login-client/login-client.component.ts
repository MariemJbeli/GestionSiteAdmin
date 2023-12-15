import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.css']
})
export class LoginClientComponent implements OnInit {

  constructor(private router: Router, private http: ServiceService) { }
  user = {
    name:'',
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

          this.router.navigate(['/vitrine']);

        }
      }
    );
  }
  ngOnInit(): void {
  }

}
