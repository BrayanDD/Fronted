import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';

import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptorService} from "./services/jwt/jwt-interceptor.service";
import {ErrorInterceptorService} from "./services/jwt/error-interceptor.service";
import { GeneralPageComponent } from './components/pages/general-page/general-page.component';
import { ButtonsComponent } from './components/atoms/buttons/button/buttons.component';
import { CreatedEmergenteComponent } from './components/atoms/emergente/created-emergente/created-emergente.component';
import { ButtonCloseComponent } from './components/atoms/buttons/button-close/button-close.component';
import {InputComponent} from "./components/atoms/input/input.component";
import {FormComponent} from "./components/molecules/form/form.component";
import { NavBibliotecaComponent } from './components/biblioteca/nav-biblioteca/nav-biblioteca.component';
import { TexAreaComponent } from './components/atoms/tex-area/tex-area.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SliderComponent } from './components/molecules/slider/slider.component';
import { PaginationsControlsComponent } from './components/atoms/paginations-controls/paginations-controls.component';
import { AlertComponent } from './components/atoms/alert/alert.component';
import { SelectAddComponent } from './components/molecules/select-add/select-add.component';
import { CapacityComponent } from './components/biblioteca/capacity/capacity.component';
import { BootcampComponent } from './components/biblioteca/bootcamp/bootcamp.component';
import { TechnologyComponent } from './components/biblioteca/technology/technology.component';
import { GeneralBibliotecaComponent } from './components/biblioteca/general-biblioteca/general-biblioteca.component';





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

    NavBibliotecaComponent,
    TexAreaComponent,
    SliderComponent,
    PaginationsControlsComponent,
    AlertComponent,
    SelectAddComponent,
    CapacityComponent,
    BootcampComponent,
    TechnologyComponent,
    GeneralBibliotecaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptorService,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
