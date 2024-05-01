import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from "@angular/forms";
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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {}


  @Input()
  set capacitiesForm(value: boolean) {
    this._capacitiesForm = value;
    if (value) {
      this._bootcampFrom = false;
      this.addCapacitiesValidators();
    }
  }

  get capacitiesForm(): boolean {
    return this._capacitiesForm;
  }

  @Input()
  set bootcampFrom(value: boolean) {
    this._bootcampFrom = value;
    if (value) {
      this._capacitiesForm = false;

    }
  }

  get bootcampFrom(): boolean {
    return this._bootcampFrom;
  }


  bibliotecaForm = this.formBuilder.group({
    name: ['', [Validators.required, customValidators.minLengthValidator(5), customValidators.maxLengthValidator(50)]],
    description: ['', [Validators.required, customValidators.minLengthValidator(5), customValidators.maxLengthValidator(50)]],
    capacidades:['']
  });

  addCapacitiesValidators(){
    const capacidadesControl = this.bibliotecaForm.get('capacidades');
    if (capacidadesControl) {
      capacidadesControl.setValidators(Validators.required);
      capacidadesControl.updateValueAndValidity();
    }
  }







  get name() {
    return this.bibliotecaForm.get('name');
  }

  get capacidades() {
    return this.bibliotecaForm.get('capacidades');
  }

  @Output() formTechValid: EventEmitter<TechnologyRequest> = new EventEmitter<TechnologyRequest>();

  get description() {
    return this.bibliotecaForm.get('description');
  }

  create(): void {
    if (this.bibliotecaForm.valid) {
      const nameValue = this.bibliotecaForm.value.name;
      const descriptionValue = this.bibliotecaForm.value.description;
      const capacitiesValue = this.bibliotecaForm.value.capacidades;
      console.log('name:', nameValue);
      console.log('descrip:', descriptionValue);
      if (nameValue !== null && descriptionValue !== null && this.technologyForm) {
        const formData: TechnologyRequest = {
          name: nameValue,
          description: descriptionValue
        };
        console.log('Datos del formulario:', formData);
        this.formTechValid.emit(formData);
      } else if(this.capacitiesForm){
        console.log('capacidades: ',capacitiesValue)
      } else {
        this.bibliotecaForm.markAllAsTouched();
      }
    }
  }
}
