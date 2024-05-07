import { Component, OnInit } from '@angular/core';
import { TechnologyService } from "../../services/technology/technology.service";
import { TechnologyRequest } from "../../services/technology/technologyRequest";
import { DataFormService } from 'src/app/services/formData.service';
import { Technology } from 'src/app/services/technology/technology';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.scss']
})
export class BibliotecaComponent implements OnInit {

  technologyError: string = "";
  formularioVisible: boolean = false;
  ventanaFormVisible: boolean = false;
  ventanaExitosoFormVisible: boolean = false;
  technologies: Technology[] = [];
  p: number = 1;

  itemsPage: number = 10;
  currentOrder: string = 'asc';
  constructor(private technologyService: TechnologyService, private dataFormService: DataFormService) { }

  ngOnInit(): void {
    this.loadTechnologies(this.currentOrder);
    this.dataFormService.formDataTechnology$.subscribe(formData =>{
      if(formData){
        this.create(formData);
      }
    })
  }

  onItemsPerPageChange(event: number): void {
    this.itemsPage = event;
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


  hideFormOnButtonClick(button: string): void {
    if (button === 'button') {
      this.ventanaFormVisible = true;
      this.formularioVisible = true;
    }
  }

  hideFormOnVentanaClose(): void {
    this.ventanaFormVisible = false;
    this.ventanaExitosoFormVisible = false;
  }

  pageChanged(event: any): void {
    this.p = event;
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
        console.info("complete")
        this.formularioVisible = false;
        this.ventanaFormVisible = false;
        this.ventanaExitosoFormVisible = true;
        this.loadTechnologies(this.currentOrder);
      }
    });
  }

}
