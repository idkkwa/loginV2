import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

   userName!: string;
   password!: string;
   formData!: FormGroup;

   constructor(private authService : AuthServiceService, private router : Router) { }

   ngOnInit() {
      this.formData = new FormGroup({
         userName: new FormControl("admin"),
         password: new FormControl("admin"),
      });
   }

   onClickSubmit(data: any) {
      this.userName = data.userName;
      this.password = data.password;

      console.log("Login page: " + this.userName);
      console.log("Login page: " + this.password);

      this.authService.login(this.userName, this.password)
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
