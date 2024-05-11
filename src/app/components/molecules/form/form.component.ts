import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl, FormControl } from "@angular/forms";
import { TechnologyRequest } from "../../../services/technology/technologyRequest";
import { DataFormService } from 'src/app/services/formData.service';
import * as customValidators from "./validators";
import { CapacityRequest } from 'src/app/services/capacity/capacityRequest';
import { ListAddService } from 'src/app/services/list-add.service';
import { capacitiesValidator } from './validators';
import { BootcampRequest } from 'src/app/services/bootcamp/bootcampRequest';

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
    if (this.form === "2") {
      this.listAddService.item.subscribe(items => {
        this.idItems = this.listAddService.idItemsAdd();
        this.bibliotecaForm.controls.capacities.setValidators([Validators.required, capacitiesValidator(this.idItems)]);
        this.bibliotecaForm.controls.capacities.updateValueAndValidity();
      });
    }
    if (this.form === "3") {
          this.listAddService.item.subscribe(items => {
            this.idItems = this.listAddService.idItemsAdd();
            this.bibliotecaForm.controls.bootcamps.setValidators([Validators.required, capacitiesValidator(this.idItems)]);
            this.bibliotecaForm.controls.bootcamps.updateValueAndValidity();
          });
        }
  }

  bibliotecaForm = this.formBuilder.group({
    name: ['', [Validators.required, customValidators.minLengthValidator(5), customValidators.maxLengthValidator(50)]],
    description: ['', [Validators.required, customValidators.minLengthValidator(5), customValidators.maxLengthValidator(50)]],
    capacities:[[]],
    bootcamps:[[]]
  });

  get name(){
    return this.bibliotecaForm.get('name');
  }

  get description(){
    return this.bibliotecaForm.get('description');
  }

  get capacities(){
    return this.bibliotecaForm.get('capacities');
  }

  get bootcamps(){
    return this.bibliotecaForm.get('bootcamps');
  }

    create(): void {

      if (this.bibliotecaForm.valid) {
        const formValue = this.bibliotecaForm.value;
        const formData: any = {
            name: formValue.name ,
            description: formValue.description
          };
          let specificFormData: any;

          if (this.form === "1") {
            specificFormData = { ...formData} as TechnologyRequest;
          } else if (this.form === "2") {
            specificFormData = { ...formData, technologyIds: this.listAddService.idItemsAdd() } as CapacityRequest;
          } else if (this.form === "3") {
            specificFormData = { ...formData, capacitiesIds: this.listAddService.idItemsAdd() } as BootcampRequest;
          }


          this.dataFormService.dataForm(specificFormData);
        } else{
          this.bibliotecaForm.markAllAsTouched();
        }

    }
}



