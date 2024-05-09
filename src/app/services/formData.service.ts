import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TechnologyRequest } from './technology/technologyRequest';


@Injectable({
  providedIn: 'root'
})
export class DataFormService {
  private formDataSubject = new BehaviorSubject<any>(null);

  constructor() {}

  get formData$() {
    return this.formDataSubject.asObservable();
  }

  dataForm(formData: any) {
    this.formDataSubject.next(formData);
  }
  clearForm(){
    this.formDataSubject.next(null);
  }
}
