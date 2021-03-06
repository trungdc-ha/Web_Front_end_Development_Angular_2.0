import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { RegisterComponent } from './register/register.component';
import { RegisterFinalComponent } from './register-final/register-final.component';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { Login2Component } from './login2/login2.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    RegisterComponent,
    RegisterFinalComponent,
    LoginComponent,
    TodoComponent,
    Login2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
