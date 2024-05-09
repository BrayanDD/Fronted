import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl, FormControl } from "@angular/forms";
import { TechnologyRequest } from "../../../services/technology/technologyRequest";
import { DataFormService } from 'src/app/services/formData.service';
import * as customValidators from "./validators";
import { CapacityRequest } from 'src/app/services/capacity/capacityRequest';
import { ListAddService } from 'src/app/services/list-add.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() form: string = "";
  @Input() items: any[] = [];

  constructor(private formBuilder: FormBuilder, private dataFormService: DataFormService, private listAddService: ListAddService) {}

  ngOnInit(): void {
    if (this.form === "1") {
      this.bibliotecaForm.controls.capacities.setValidators([Validators.required, customValidators.minLengthValidator(5), customValidators.maxLengthValidator(50)]);
      this.bibliotecaForm.controls.capacities.updateValueAndValidity();
    }
  }

  bibliotecaForm = this.formBuilder.group({
    name: ['', [Validators.required, customValidators.minLengthValidator(5), customValidators.maxLengthValidator(50)]],
    description: ['', [Validators.required, customValidators.minLengthValidator(5), customValidators.maxLengthValidator(50)]],
    capacities:['']
  });

  get name(){
    return this.bibliotecaForm.get('name');
  }

  get description(){
    return this.bibliotecaForm.get('description');
  }

  get capacitites(){
    return this.bibliotecaForm.get('capacities');
  }

  create(): void {

    if (this.bibliotecaForm.valid) {
      const formValue = this.bibliotecaForm.value;
      if (formValue.name !== null && formValue.description !== null && this.form === "1" ) {
        const formData: TechnologyRequest = {
          name: formValue.name ,
          description: formValue.description
        };
        console.log('tech', formData);
        this.dataFormService.dataForm(formData);
      } else if (formValue.name !== null && formValue.description !== null && this.form === "2") {
        console.log('capacidades: ')
        const formData: CapacityRequest={
          name: formValue.name,
          description: formValue.description,
          technologyIds: this.listAddService.idItemsAdd()
        };
        this.dataFormService.dataForm(formData);
      } else {
        this.bibliotecaForm.markAllAsTouched();
      }

  }
}

 // technologyForm: boolean = true;
  // _capacitiesForm: boolean = false;
  // _bootcampFrom: boolean = false;
  // @Input()
  // set capacitiesForm(value: boolean) {
  //   this._capacitiesForm = value;
  //   if (value) {
  //     this._bootcampFrom = false;
  //     this.technologyForm = false;
  //   }
  // }

  // @Input()
  // set bootcampFrom(value: boolean) {
  //   this._bootcampFrom = value;
  //   if (value) {
  //     this._capacitiesForm = false;
  //     this.technologyForm = false;
  //   }
  // }
  //utilzar iconos svg
  //arquitectura lift
  //logica separada correcion a logica generica, hace un input que reciba el for,
  //legibilidad correcion,@Input() variableName: string = ''; de este hacer la condicional dependiendo el caso




  // private initForm(): void {
  //   if (this._capacitiesForm) {
  //     this.bibliotecaForm.controls.capacities.setValidators([Validators.required, Validators.minLength(5), Validators.maxLength(50)]);
  //     this.bibliotecaForm.controls.capacities.updateValueAndValidity();
  //   }
  // }

  //form y creacion de componentes angular
  //corregir el uso de metodos

  //crear generenicos en las validaciones
  // private addCapacitiesValidators(): void {
  //   this.capacities.setValidators([Validators.required, customValidators.minLengthValidator(5), customValidators.maxLengthValidator(50)]);
  //   this.capacities.updateValueAndValidity();
  // }


   //servicios para seter los datos mandador por el emit


  //    this.formName.get('controlName');
  // this.formName.get('controlName')?.hasError('errorName');
  // this.formName.get('controlName')?.errors;

  //el tema de modulos para atomos y moculas y estos llamarlos en el modulo padre




}
