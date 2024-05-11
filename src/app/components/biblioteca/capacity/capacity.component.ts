import { Component, OnInit } from '@angular/core';
import { Capacity } from 'src/app/services/capacity/capacity';
import { CapacityService } from 'src/app/services/capacity/capacity.service';
import { CapacityRequest } from 'src/app/services/capacity/capacityRequest';
import { DataFormService } from 'src/app/services/formData.service';
import { ListAddService } from 'src/app/services/list-add.service';
import { Technology } from 'src/app/services/technology/technology';
import { TechnologyService } from 'src/app/services/technology/technology.service';

@Component({
  selector: 'app-capacity',
  templateUrl: './capacity.component.html',
  styleUrls: ['./capacity.component.scss']
})
export class CapacityComponent implements OnInit {

  capcities: Capacity[] = [];
  capacityError: string = "";
  formularioVisible: boolean = false;
  ventanaFormVisible: boolean = false;
  ventanaExitosoFormVisible: boolean = false;
  technologies: Technology[] = [];
  p: number = 1;

  itemsPage: number = 10;
  currentOrder: string = 'asc';

  constructor(private technologyService: TechnologyService, private dataFormService: DataFormService, private capacityService: CapacityService,private lisAddService: ListAddService) { }

  ngOnInit(): void {
    this.loadCapacities(this.currentOrder);
    this.technologyService.getAllTechnology(this.currentOrder).subscribe(
      (technologies: Technology[]) => {
        this.technologies = technologies;

      },
      (error) => {
        console.error('Error al obtener las tecnologías:', error);
      }
    );
    this.dataFormService.formData$.subscribe(formData =>{
      if(this.isCapacityRequest(formData)){
        this.create(formData);
      }
    })
  }

  private isCapacityRequest(obj: any): obj is CapacityRequest {
    return obj && typeof obj === 'object' && 'name' in obj && 'description' in obj && 'technologyIds' in obj;
  }

  loadCapacities(order: string) {
    this.currentOrder = order;
    this.capacityService.getAllCapacity(this.currentOrder).subscribe(
      (capcities: Capacity[]) => {
        this.capcities = capcities;

      },
      (error) => {
        console.error('Error al obtener las tecnologías:', error);
      }
    );
  }

  create(formData: CapacityRequest): void {
    console.log('Datos del formulario:', formData);
    this.capacityService.createCapacity(formData as CapacityRequest).subscribe({
      next: () => {
        console.log("creando")
      },
      error: (errorData) => {
        console.log(errorData)
        this.capacityError = errorData;
      },
      complete: () => {
        console.info("complete")
        this.formularioVisible = false;
        this.ventanaFormVisible = false;
        this.ventanaExitosoFormVisible = true;
        this.loadCapacities(this.currentOrder);
        this.dataFormService.clearForm;
      }
    });
  }


}
