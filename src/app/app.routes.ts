import { Routes } from '@angular/router';
import { NewEmplooyeComponent } from './new-emplooye/new-emplooye.component';
import { EmplooyesRecordComponent } from './emplooyes-record/emplooyes-record.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LayoutComponentComponent } from './layout-component/layout-component.component';

export const routes: Routes = [
    {path:'',component:LayoutComponentComponent,children:[
        {path:'',component:HomeComponent},
        {path:'new-emplooye',component:NewEmplooyeComponent},
        {path:'emplooyes-record',component:EmplooyesRecordComponent},
        {path:'login',component:LoginComponent},
        {path:'signup',component:SignupComponent},
    ]},
    {path:'**',component:PageNotFoundComponent}
];
