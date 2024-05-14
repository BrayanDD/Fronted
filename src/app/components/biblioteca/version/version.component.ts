import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataFormService } from 'src/app/services/formData.service';
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
  bootcampId: number | null = null;
  versions: any[] = [];
  versionError: string = '';
   constructor(private route: ActivatedRoute, private dataFormService: DataFormService, private versionService: VersionService) { }

   ngOnInit(): void {
     this.route.params.subscribe(params => {
       this.bootcampId = params['bootcampId'];
       console.log('el parametro es: '+ this.bootcampId)
     });
     this.dataFormService.formData$.subscribe(formData => {
      console.log('datos de la versión fuera del if', JSON.stringify(formData));
      if (this.isVersionRequest(formData)) {
        console.log('datos de la versión dentro del if', JSON.stringify(formData));

        this.create(formData);
      }
    });
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
      }
    });
  }
}
