import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ErrorComponent } from './error/error.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'catalog', component: CatalogComponent},
    {path: 'about', component: AboutComponent},
    {path: 'details', component: DetailsComponent},
    {path: 'edit', component: EditComponent},
    {path: '**', component: ErrorComponent},
];
