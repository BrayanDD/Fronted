import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';

import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptorService} from "./services/jwt/jwt-interceptor.service";
import {ErrorInterceptorService} from "./services/jwt/error-interceptor.service";
import { GeneralPageComponent } from './components/pages/general-page/general-page.component';
import { ButtonsComponent } from './components/atoms/buttons/button/buttons.component';
import { CreatedEmergenteComponent } from './components/atoms/emergente/created-emergente/created-emergente.component';
import { ButtonCloseComponent } from './components/atoms/buttons/button-close/button-close.component';
import {TexareaComponent} from "./components/atoms/texarea/texarea.component";
import {InputComponent} from "./components/atoms/input/input.component";
import {FormComponent} from "./components/molecules/form/form.component";
import { NavBibliotecaComponent } from './components/biblioteca/nav-biblioteca/nav-biblioteca.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InicioComponent,
    HeaderComponent,
    BibliotecaComponent,
    GeneralPageComponent,
    ButtonsComponent,
    CreatedEmergenteComponent,
    ButtonCloseComponent,
    FormComponent,
    InputComponent,
    TexareaComponent,
    NavBibliotecaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptorService,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
