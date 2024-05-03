import { Component, OnInit } from '@angular/core';
// import {FormBuilder,Validators} from "@angular/forms";
import {TechnologyService} from "../../services/technology/technology.service";
import {TechnologyRequest} from "../../services/technology/technologyRequest";
import { DataFormService } from 'src/app/services/formData.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.scss']
})
export class BibliotecaComponent implements OnInit {

  technologyError:string="";

  formularioVisible: boolean = false;
  ventanaFormVisible: boolean = false;

  hideFormOnButtonClick(button: string) {
    if (button === 'button') {
      this.ventanaFormVisible = true;
      this.formularioVisible = true;
    }
  }

  ventanaExitosoFormVisible: boolean = false;

  hideFormOnVentanaClose(): void {
    this.ventanaFormVisible = false;
    this.ventanaExitosoFormVisible = false;
  }

  constructor(private technologyService : TechnologyService, private dataFormService: DataFormService) { }



  ngOnInit(): void {
    this.dataFormService.formDataTechnology$.subscribe(formData =>{
      if(formData){
        this.create(formData);
      }
    })
  }


  create(formData: TechnologyRequest): void{
      console.log('Datos del formulario:', formData);
      this.technologyService.createTechnology(formData as TechnologyRequest).subscribe({
        next: () =>{
          console.log("creando")
        },
        error: (errorData)=>{
          console.log(errorData)
          this.technologyError=errorData;
        },
        complete: ()=>{
          console.info("complete")
          this.formularioVisible = false;
          this.ventanaFormVisible = false;
          this.ventanaExitosoFormVisible = true;
        }
      });


  }

}
