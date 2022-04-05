import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginV2';
  fruits: string[]= ["Apple", "Grapes","Orange"]
  
  constructor(private service: LoginServiceService){

  }

  ngOnInit(){
    this.service.getBackendData().subscribe((reponse)=>{
      alert(reponse)
    })
  }
}
