import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ErrorComponent } from './error/error.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { authGuard } from './guards/auth.guard';
import { userGuard } from './guards/user.guard';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},

    {path: 'login', component: LoginComponent, canActivate: [userGuard]},
    {path: 'register', component: RegisterComponent, canActivate: [userGuard]},

    {path: 'catalog', component: CatalogComponent},
    {path: 'about', component: AboutComponent},
    {
        path: 'details',
        children: [
            {path: '', component: HomeComponent},
            {
                path: ':trailId',
                component: DetailsComponent,
            }
        ]
    },
    {
        path: 'edit', 
        children: [
            {
                path: ':trailId',
                component: EditComponent,
                canActivate: [authGuard]
            }
        ]
    },
    {path: 'create', component: CreateComponent, canActivate: [authGuard]},
    {path: 'profile', component: ProfileComponent, canActivate: [authGuard]},
    {path: 'profile/edit', component: ProfileEditComponent, canActivate: [authGuard]},
    {path: '**', component: ErrorComponent},
];

