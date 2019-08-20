import { Injectable } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http"

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    
    readonly BaseURI = 'http://localhost:55365/api'

    constructor(private fb:FormBuilder, private http: HttpClient) {
    }


    formModel = this.fb.group({
        UserName: ['', Validators.required],
        Email: ['', Validators.email],
        Login: ['', Validators.required],
        Passwords: this.fb.group({
            Password: ['', [Validators.required, Validators.minLength(6)]],
            ConfirmPassword: ['', Validators.required]
        }, {validator : this.comparePasswords})
    });

    comparePasswords(fb:FormGroup) {
        let confirmPasswordCtrl = fb.get('ConfirmPassword')
        if (confirmPasswordCtrl.errors == null || 'passwordMismatch' in confirmPasswordCtrl.errors) {
            if(fb.get('Password').value != confirmPasswordCtrl.value) {
                confirmPasswordCtrl.setErrors({passwordMismatch: true});
            }
            else {
                confirmPasswordCtrl.setErrors(null);
            }
        }
    }

    register() {
        var body = {
            UserName: this.formModel.value.UserName,
            Email: this.formModel.value.Email,
            Login: this.formModel.value.Login, 
            Password: this.formModel.value.Passwords.Password, 
        };
        return this.http.post(this.BaseURI+'/ApplicationUser/Register', body);
    }
    
}