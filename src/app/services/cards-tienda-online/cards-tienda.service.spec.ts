import { TestBed } from '@angular/core/testing';

import { CardsTiendaService } from './cards-tienda.service';

describe('CardsTiendaService', () => {
  let service: CardsTiendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsTiendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
