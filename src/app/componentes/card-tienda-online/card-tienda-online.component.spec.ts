import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTiendaOnlineComponent } from './card-tienda-online.component';

describe('CardTiendaOnlineComponent', () => {
  let component: CardTiendaOnlineComponent;
  let fixture: ComponentFixture<CardTiendaOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardTiendaOnlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTiendaOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
