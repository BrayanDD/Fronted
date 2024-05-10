import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl, FormControl } from "@angular/forms";
import { TechnologyRequest } from "../../../services/technology/technologyRequest";
import { DataFormService } from 'src/app/services/formData.service';
import * as customValidators from "./validators";
import { CapacityRequest } from 'src/app/services/capacity/capacityRequest';
import { ListAddService } from 'src/app/services/list-add.service';
import { capacitiesValidator } from './validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() form: string = "";
  @Input() items: any[] = [];
  idItems: number[] = [];
  constructor(private formBuilder: FormBuilder, private dataFormService: DataFormService, private listAddService: ListAddService) {}

  ngOnInit(): void {
    if (this.form === "1") {
      this.listAddService.item.subscribe(items => {
        this.idItems = this.listAddService.idItemsAdd(); // Actualiza los idItems cuando hay cambios
        this.bibliotecaForm.controls.capacities.setValidators([Validators.required, capacitiesValidator(this.idItems)]);
        this.bibliotecaForm.controls.capacities.updateValueAndValidity();
      });
    }

  }

  bibliotecaForm = this.formBuilder.group({
    name: ['', [Validators.required, customValidators.minLengthValidator(5), customValidators.maxLengthValidator(50)]],
    description: ['', [Validators.required, customValidators.minLengthValidator(5), customValidators.maxLengthValidator(50)]],
    capacities:[[]]
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
      } else if (formValue.name !== null && formValue.description !== null && formValue.capacities !==null && this.form === "2") {
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


}
