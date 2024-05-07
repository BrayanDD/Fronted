import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TechnologyService } from './technology.service';
import { TechnologyRequest } from './technologyRequest';
import { Technology } from './technology';
import { environment } from "../../../environments/environment";

describe('TechnologyService', () => {
  let service: TechnologyService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TechnologyService]
    });
    service = TestBed.inject(TechnologyService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a technology', () => {
    const mockTechnologyRequest: TechnologyRequest = { /* Define un mock de TechnologyRequest */ };

    service.createTechnology(mockTechnologyRequest).subscribe(response => {
      expect(response.status).toBe(200); // Verifica que el status sea 200
    });

    const req = httpTestingController.expectOne(`${environment.urlApi}technologies`);
    expect(req.request.method).toBe('POST');
    req.flush({ status: 200 }); // Simula una respuesta con status 200
  });

  it('should get all technologies', () => {
    const mockOrder: string = 'exampleOrder';
    const mockTechnologies: Technology[] = [
      { id: 1, name: 'Technology 1', description: 'Description 1' },
      { id: 2, name: 'Technology 2', description: 'Description 2' }
    ];

    service.getAllTechnology(mockOrder).subscribe((technologies: Technology[]) => {
      expect(technologies.length).toBeGreaterThan(0); // Verifica que se reciba al menos un elemento
      expect(technologies[0].id).toBeDefined(); // Verifica que el primer elemento tenga la propiedad 'id'
      expect(technologies[0].name).toBeDefined(); // Verifica que el primer elemento tenga la propiedad 'name'
      expect(technologies[0].description).toBeDefined(); // Verifica que el primer elemento tenga la propiedad 'description'
    });

    const req = httpTestingController.expectOne(`${environment.urlApi}technologies?order=${mockOrder}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockTechnologies); // Simula una respuesta con un array de tecnologías
  });

});
