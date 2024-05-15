import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BibliotecaComponent} from "./components/biblioteca/biblioteca.component";
import {InicioComponent} from "./components/inicio/inicio.component";
import {GeneralPageComponent} from "./components/pages/general-page/general-page.component";
import {InputComponent} from "./components/atoms/input/input.component";
import {FormComponent} from "./components/molecules/form/form.component";
import { TexAreaComponent } from './components/atoms/tex-area/tex-area.component';
import { SelectAddComponent } from './components/molecules/select-add/select-add.component';
import { CapacityComponent } from './components/biblioteca/capacity/capacity.component';
import { BootcampComponent } from './components/biblioteca/bootcamp/bootcamp.component';
import { TechnologyComponent } from './components/biblioteca/technology/technology.component';
import { VersionComponent } from './components/biblioteca/version/version.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  {
    path: 'biblioteca', component: BibliotecaComponent,
    children: [
      { path: '', redirectTo: 'technology', pathMatch: 'full' },
      { path: 'technology', component: TechnologyComponent },
      { path: 'capacity', component: CapacityComponent },
      { path: 'bootcamp', component: BootcampComponent },

      { path: 'version/:bootcampId/:bootcampName', component: VersionComponent }

    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
