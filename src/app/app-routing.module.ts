import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BibliotecaComponent} from "./components/biblioteca/biblioteca.component";
import {InicioComponent} from "./components/inicio/inicio.component";
import {GeneralPageComponent} from "./components/pages/general/general-page/general-page.component";


const routes: Routes = [
  {path:'',redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio',component:InicioComponent},
  {path:'biblioteca',component:BibliotecaComponent},
  {path: 'general', component:GeneralPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
