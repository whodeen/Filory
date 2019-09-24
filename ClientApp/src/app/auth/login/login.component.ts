import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';

@Component ({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {
    formModel = {
        UserName: '',
        Password: ''
    }

    constructor(private service:AuthService, private router: Router) {
        
    }
    
    onSubmit(form:NgForm) {
        this.service.login(form.value).subscribe(
            (res:any)=> {
                localStorage.setItem('token', res.token);
                this.router.navigateByUrl('/game');
            },
            err => {
                //TODO: Wrong user name or password message
                if (err.status == 400) console.log(err);
            }
        );
    }
}


