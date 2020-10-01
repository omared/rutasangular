import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//RUTAS
import { APP_ROUTING } from './app.routes';


//SERVICIOS


//COMPONENTES
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { WorkComponent } from './components/work/work.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeComponent,
    WorkComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
