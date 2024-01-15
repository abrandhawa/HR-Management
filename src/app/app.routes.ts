import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewEmplooyeComponent } from './new-emplooye/new-emplooye.component';
import { EmplooyesRecordComponent } from './emplooyes-record/emplooyes-record.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'new-emplooye',component:NewEmplooyeComponent},
    {path:'emplooyes-record',component:EmplooyesRecordComponent},
    {path:'**',component:PageNotFoundComponent}
];
