import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { AuthServiceService } from './services/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Login } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


   
   // username!: string;
   // password!: string;
   // formData!: FormGroup;

   model: any = {}
   users?: Login[];
   submitted = false;

   theUser: Login = {
      username: '',
      password: '',
    };

    message = '';

   constructor(private loginService: LoginService,
      private route: ActivatedRoute,
      private router: Router) { }

   ngOnInit() {
      // this.formData = new FormGroup({
      //    username: new FormControl("admin"),
      //    password: new FormControl("admin"),
      // });
      this.retrieveUsers();
      this.compareUser();
   }


   login(){
      //console.log(this.model)
   }

   retrieveUsers(): void {
      this.loginService.getAll()
        .subscribe(
          data => {
            this.users = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }

    compareUser(): void {
      const data = {
         username: this.model.username,
         password:this.model.password,      
      }
  
      this.message = '';
      this.loginService.check(data)
        .subscribe(
          response => {
            console.log(response);
            this.submitted = true;
            this.message = response.message ? response.message : 'There is a match';
          },
          error => {
            console.log(error);
          });
    }
//    onClickSubmit(data: any) {
//       this.username = data.username;
//       this.password = data.password;

//       console.log("Login page: " + this.username);
//       console.log("Login page: " + this.password);

//       this.authService.login(this.username, this.password)
//          .subscribe( data => { 
//             console.log("Is Login Success: " + data); 
      
//            if(data) this.router.navigate(['']); 
//       });
//    }
// }

// export class LoginComponent implements OnInit {
//   formGroup!: FormGroup;
//   constructor(private authService: AuthServiceService) {}
//   ngOnInit(): void {
//     this.initForm();
//   }

//   initForm(){
//     this.formGroup = new FormGroup({
//       user_name: new FormControl('', [Validators.required]),
//       pass_word: new FormControl('', [Validators.required])

//     })
//   }

//   loginProcess(){
//     if(this.formGroup.valid){
//       this.authService.login(this.formGroup.value).subscribe(result=>{
//         if(result.success){
//           console.log(result);
//           alert(result.message);
//         }else{
//           alert(result.message);
//         }
//       })
//     }
//   }
 }