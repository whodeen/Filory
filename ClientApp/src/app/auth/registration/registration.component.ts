import {Component} from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent {

  constructor(public service: AuthService) {
    this.service.formModel.reset();
  }

  onSubmit() {
    this.service.register().subscribe(
      (resp:any) => {
        if (resp.succeeded) {
          this.service.formModel.reset();
        } else {
          resp.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
              //TODO: SHOW DUPLICATE USER NAME MESSAGE TO USER 
              break;

              default:
              break;
            }  
          });
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
