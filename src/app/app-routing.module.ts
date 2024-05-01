import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BibliotecaComponent} from "./components/biblioteca/biblioteca.component";
import {InicioComponent} from "./components/inicio/inicio.component";
import {GeneralPageComponent} from "./components/pages/general-page/general-page.component";
import {InputComponent} from "./components/atoms/input/input.component";
import {TexareaComponent} from "./components/atoms/texarea/texarea.component";
import {FormComponent} from "./components/molecules/form/form.component";


const routes: Routes = [
  {path:'',redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio',component:InicioComponent},
  {path:'biblioteca',component:BibliotecaComponent},
  {path: 'general', component:GeneralPageComponent},
  {path: 'input', component:InputComponent},
  {path: 'texarea', component:TexareaComponent},
  {path: 'form', component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
