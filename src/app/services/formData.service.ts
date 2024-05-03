import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TechnologyRequest } from './technology/technologyRequest';


@Injectable({
  providedIn: 'root'
})
export class DataFormService {
  private formDataTechnologySubject = new BehaviorSubject<TechnologyRequest | null>(null);

  constructor() {}

  get formDataTechnology$() {
    return this.formDataTechnologySubject.asObservable();
  }

  technologyForm(formData: TechnologyRequest) {
    this.formDataTechnologySubject.next(formData);
  }
}
