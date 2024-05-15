import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataFormService } from 'src/app/services/formData.service';
import { Version } from 'src/app/services/version/version';
import { VersionService } from 'src/app/services/version/version.service';
import { VersionRequest } from 'src/app/services/version/versionRequest';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit {

  formularioVisible: boolean = false;
  ventanaFormVisible: boolean = false;
  ventanaExitosoFormVisible: boolean = false;
  bootcampName: string = '';
  bootcampId: number  = 0;
  versions: any[] = [];
  versionError: string = '';
  currentOrder: string = 'asc';

   constructor(private route: ActivatedRoute, private dataFormService: DataFormService, private versionService: VersionService) { }

   ngOnInit(): void {
     this.route.params.subscribe(params => {
       this.bootcampId = params['bootcampId'];
       this.bootcampName = params['bootcampName'];
       console.log('el parametro es: '+ this.bootcampId);
       console.log('Bootcamp Name:', this.bootcampName);
     });
     this.dataFormService.formData$.subscribe(formData => {
      console.log('datos de la versión fuera del if', JSON.stringify(formData));
      if (this.isVersionRequest(formData)) {
        console.log('datos de la versión dentro del if', JSON.stringify(formData));

        this.create(formData);
      }
    });
    this.loadVersions(this.currentOrder);
   }


    private isVersionRequest(obj: any): obj is VersionRequest {
      return (
        obj &&
        typeof obj === 'object' &&
        'version' in obj &&
        'idBootcamp' in obj &&
        'startDate' in obj &&
        'endDate' in obj &&
        'maxCapacity' in obj
      );
    }
  showFormOnButtonClick(button: string): void {
    if (button === 'button') {
      this.ventanaFormVisible = true;
      this.formularioVisible = true;
    }
  }

  hideFormOnVentanaClose(): void {
    this.ventanaFormVisible = false;
    this.ventanaExitosoFormVisible = false;
  }

  loadVersions(order: string) {
    this.currentOrder = order;
    this.versionService.getAllVersionIdBootcamp(this.currentOrder,this.bootcampId).subscribe(
      (versions: Version[]) => {
        this.versions = versions;

      },
      (error) => {
        console.error('Error al obtener las tecnologías:', error);
      }
    );
  }

  create(formData: VersionRequest): void {
    console.log('Datos del formulario:', formData);
    this.versionService.createVersion(formData as VersionRequest).subscribe({
      next: () => {
        console.log("creando")
      },
      error: (errorData) => {
        console.log(errorData)
        this.versionError = errorData;
      },
      complete: () => {
        this.formularioVisible = false;
        this.ventanaFormVisible = false;
        this.ventanaExitosoFormVisible = true;
        this.dataFormService.clearForm;
        this.loadVersions(this.currentOrder);
      }
    });
  }
}
