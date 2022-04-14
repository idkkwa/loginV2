import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { AuthServiceService } from './services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

   username!: string;
   password!: string;
   formData!: FormGroup;

   constructor(private authService : AuthServiceService, private router : Router) { }

   ngOnInit() {
      this.formData = new FormGroup({
         username: new FormControl("admin"),
         password: new FormControl("admin"),
      });
   }

   onClickSubmit(data: any) {
      this.username = data.username;
      this.password = data.password;

      console.log("Login page: " + this.username);
      console.log("Login page: " + this.password);

      this.authService.login(this.username, this.password)
         .subscribe( data => { 
            console.log("Is Login Success: " + data); 
      
           if(data) this.router.navigate(['']); 
      });
   }
}

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
// }