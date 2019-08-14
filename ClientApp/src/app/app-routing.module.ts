import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import {LoginComponent} from './auth/login/login.component';


const routes: Routes  = [
    { path: '', redirectTo:'/auth/registration', pathMatch: 'full' },
    {
      path:'auth', component: AuthComponent, 
      children: [
          {path:'registration', component:RegistrationComponent},
          {path:'login', component:LoginComponent}
      ]
    }  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}