import { Component, OnInit } from '@angular/core';
import { DataFormService } from 'src/app/services/formData.service';
import { Technology } from 'src/app/services/technology/technology';
import { TechnologyService } from 'src/app/services/technology/technology.service';
import { TechnologyRequest } from 'src/app/services/technology/technologyRequest';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {


  technologyError: string = "";

  technologies: Technology[] = [];
  formularioVisible: boolean = false;
  ventanaFormVisible: boolean = false;
  ventanaExitosoFormVisible: boolean = false;
  currentOrder: string = 'asc';
  constructor(private technologyService: TechnologyService, private dataFormService: DataFormService) { }

  ngOnInit(): void {
    this.loadTechnologies(this.currentOrder);
    this.dataFormService.formData$.subscribe(formData =>{
      if (this.isTechnologyRequest(formData)) {

        this.create(formData);
      }
    })

  }

  private isTechnologyRequest(obj: any): obj is TechnologyRequest {
    return obj && typeof obj === 'object' && 'name' in obj && 'description' in obj;
  }

  loadTechnologies(order: string) {
    this.currentOrder = order;
    this.technologyService.getAllTechnology(this.currentOrder).subscribe(
      (technologies: Technology[]) => {
        this.technologies = technologies;

      },
      (error) => {
        console.error('Error al obtener las tecnologías:', error);
      }
    );
  }



  create(formData: TechnologyRequest): void {
    console.log('Datos del formulario:', formData);
    this.technologyService.createTechnology(formData as TechnologyRequest).subscribe({
      next: () => {
        console.log("creando")
      },
      error: (errorData) => {
        console.log(errorData)
        this.technologyError = errorData;
      },
      complete: () => {
        this.formularioVisible = false;
        this.ventanaFormVisible = false;
        this.ventanaExitosoFormVisible = true;
        this.loadTechnologies(this.currentOrder);
        this.dataFormService.clearForm;
      }
    });
  }

}
