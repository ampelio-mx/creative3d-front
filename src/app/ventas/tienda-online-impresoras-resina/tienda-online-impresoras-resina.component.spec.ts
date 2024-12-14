import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaOnlineImpresorasResinaComponent } from './tienda-online-impresoras-resina.component';

describe('TiendaOnlineImpresorasResinaComponent', () => {
  let component: TiendaOnlineImpresorasResinaComponent;
  let fixture: ComponentFixture<TiendaOnlineImpresorasResinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TiendaOnlineImpresorasResinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaOnlineImpresorasResinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
