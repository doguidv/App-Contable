import { TestBed } from '@angular/core/testing';

import { AddCategoriasService } from './add-categorias.service';

describe('AddCategoriasService', () => {
  let service: AddCategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddCategoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
