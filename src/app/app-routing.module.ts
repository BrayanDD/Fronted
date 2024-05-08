import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BibliotecaComponent} from "./components/biblioteca/biblioteca.component";
import {InicioComponent} from "./components/inicio/inicio.component";
import {GeneralPageComponent} from "./components/pages/general-page/general-page.component";
import {InputComponent} from "./components/atoms/input/input.component";
import {FormComponent} from "./components/molecules/form/form.component";
import { TexAreaComponent } from './components/atoms/tex-area/tex-area.component';
import { SelectAddComponent } from './components/molecules/select-add/select-add.component';


const routes: Routes = [
  {path:'',redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio',component:InicioComponent},
  {path:'biblioteca',component:BibliotecaComponent},
  {path: 'general', component:GeneralPageComponent},
  {path: 'input', component:InputComponent},
  {path: 'texarea', component:TexAreaComponent},
  {path: 'form', component:FormComponent},
  {path: 'select', component:SelectAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
