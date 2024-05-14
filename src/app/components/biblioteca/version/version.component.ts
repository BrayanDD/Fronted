import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit {

  formularioVisible: boolean = false;
  ventanaFormVisible: boolean = false;
  ventanaExitosoFormVisible: boolean = false;
  bootcampId: string | undefined;
  versions: any[] = [];
   constructor(private route: ActivatedRoute) { }

   ngOnInit(): void {
     this.route.params.subscribe(params => {
       this.bootcampId = params['bootcampId'];
       console.log('el parametro es: '+ this.bootcampId)
     });
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
}
