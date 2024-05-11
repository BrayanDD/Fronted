import { Component, OnInit } from '@angular/core';
import { Bootcamp } from 'src/app/services/bootcamp/bootcamp';
import { BootcampService } from 'src/app/services/bootcamp/bootcamp.service';
import { BootcampRequest } from 'src/app/services/bootcamp/bootcampRequest';
import { Capacity } from 'src/app/services/capacity/capacity';
import { CapacityService } from 'src/app/services/capacity/capacity.service';
import { DataFormService } from 'src/app/services/formData.service';
import { ListAddService } from 'src/app/services/list-add.service';

@Component({
  selector: 'app-bootcamp',
  templateUrl: './bootcamp.component.html',
  styleUrls: ['./bootcamp.component.scss']
})
export class BootcampComponent implements OnInit {


  bootcamps: Bootcamp[] = [];
  bootcampError: string = "";
  formularioVisible: boolean = false;
  ventanaFormVisible: boolean = false;
  ventanaExitosoFormVisible: boolean = false;
  capacities: Capacity[] = [];
  page: number = 1;

  itemsPage: number = 10;
  currentOrder: string = 'asc';

  constructor(private bootcampService: BootcampService, private dataFormService: DataFormService, private capacityService: CapacityService,private lisAddService: ListAddService) { }

  ngOnInit(): void {
    this.loadCapacities(this.currentOrder);
    this.capacityService.getAllCapacity(this.currentOrder).subscribe(
      (capacities: Capacity[]) => {
        this.capacities = capacities;

      },
      (error) => {
        console.error('Error al obtener las tecnologías:', error);
      }
    );
    this.dataFormService.formData$.subscribe(formData =>{
      if(formData){
        this.create(formData);
      }
    })

  }

  onItemsPerPageChange(event: number): void {
    this.itemsPage = event;
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

  loadCapacities(order: string) {
    this.currentOrder = order;
    this.bootcampService.getAllBootcamp(this.currentOrder).subscribe(
      (bootcamp: Bootcamp[]) => {
        this.bootcamps = bootcamp;

      },
      (error) => {
        console.error('Error al obtener las tecnologías:', error);
      }
    );
  }
  pageChanged(event: any): void {
    this.page = event;
  }

  create(formData: BootcampRequest): void {
    console.log('Datos del formulario:', formData);
    this.bootcampService.createBootcamp(formData as BootcampRequest).subscribe({
      next: () => {
        console.log("creando")
      },
      error: (errorData) => {
        console.log(errorData)
        this.bootcampError = errorData;
      },
      complete: () => {
        console.info("complete")
        this.formularioVisible = false;
        this.ventanaFormVisible = false;
        this.ventanaExitosoFormVisible = true;

        this.dataFormService.clearForm;
      }
    });
  }


}
