import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { WorkComponent } from './components/work/work.component';
import { ContactComponent } from './components/contact/contact.component';

const APP_ROUTES: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'resume', component: ResumeComponent },
{ path: 'work', component: WorkComponent },
{ path: 'contact', component: ContactComponent },
{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);