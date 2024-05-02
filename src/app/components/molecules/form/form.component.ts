import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl, FormControl } from "@angular/forms";
import { TechnologyRequest } from "../../../services/technology/technologyRequest";
import * as customValidators from "./validators";
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  technologyForm: boolean = true;
  _capacitiesForm: boolean = false;
  _bootcampFrom: boolean = false;

  @Input()
  set capacitiesForm(value: boolean) {
    this._capacitiesForm = value;
    if (value) {
      this._bootcampFrom = false;
      this.technologyForm = false;
    }
  }

  @Input()
  set bootcampFrom(value: boolean) {
    this._bootcampFrom = value;
    if (value) {
      this._capacitiesForm = false;
      this.technologyForm = false;
    }
  }
  //utilzar iconos svg
  //arquitectura lift
  //logica separada correcion a logica generica, hace un input que reciba el for,
  //legibilidad correcion,@Input() variableName: string = ''; de este hacer la condicional dependiendo el caso
  constructor(private formBuilder: FormBuilder) {

  }

  bibliotecaForm = this.formBuilder.group({
    name: ['', [Validators.required, customValidators.minLengthValidator(5), customValidators.maxLengthValidator(50)]],
    description: ['', [Validators.required, customValidators.minLengthValidator(5), customValidators.maxLengthValidator(50)]],
    capacities:['']
  });

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    if (this._capacitiesForm) {
      this.addCapacitiesValidators();
    }
  }

  //form y creacion de componentes angular
  //corregir el uso de metodos

  //crear generenicos en las validaciones
  private addCapacitiesValidators(): void {
    this.capacities.setValidators([Validators.required, customValidators.minLengthValidator(5), customValidators.maxLengthValidator(50)]);
    this.capacities.updateValueAndValidity();
  }

   get name(){
     return this.bibliotecaForm.controls.name;
   }

   get description(){
     return this.bibliotecaForm.controls.description;
   }

   get capacities(){
     return this.bibliotecaForm.controls.capacities;
   }

   //servicios para seter los datos mandador por el emit


  //    this.formName.get('controlName');
  // this.formName.get('controlName')?.hasError('errorName');
  // this.formName.get('controlName')?.errors;

  //el tema de modulos para atomos y moculas y estos llamarlos en el modulo padre
  @Output() formTechValid: EventEmitter<TechnologyRequest> = new EventEmitter<TechnologyRequest>();

  create(): void {

      if (this.bibliotecaForm.valid) {
        const formValue = this.bibliotecaForm.value;

        const nameValue = formValue.name;
        const descriptionValue = formValue.description;
        const capacitiesValue = formValue.capacities;

        if (nameValue !== null && descriptionValue !== null && this.technologyForm) {
          const formData: TechnologyRequest = {
            name: nameValue,
            description: descriptionValue
          };
          console.log('Datos del formulario:', formData);
          this.formTechValid.emit(formData);
        } else if (this._capacitiesForm) {
          console.log('capacidades: ', capacitiesValue)
        } else {


          this.bibliotecaForm.markAllAsTouched();
        }

    }
  }

}
