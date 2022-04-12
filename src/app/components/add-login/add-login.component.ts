import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Login } from 'src/app/models/login.model';

@Component({
  selector: 'app-add-login',
  templateUrl: './add-login.component.html',
  styleUrls: ['./add-login.component.css']
})
export class AddLoginComponent implements OnInit {
    login: Login = {
      username: '',
      password: '',
    };
  
    submitted = false;
    constructor(private loginService: LoginService) { }
    ngOnInit(): void {
    }
  
    saveUser(): void {
      const data = {
        username: this.login.username,
        password: this.login.password,
      };
  
      this.loginService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
    }
  
      newUser(): void {
        this.submitted = false;
        this.login = {
          username: '',
          password: '',
        };
      }
  }