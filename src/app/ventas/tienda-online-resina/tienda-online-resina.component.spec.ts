import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaOnlineResinaComponent } from './tienda-online-resina.component';

describe('TiendaOnlineResinaComponent', () => {
  let component: TiendaOnlineResinaComponent;
  let fixture: ComponentFixture<TiendaOnlineResinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TiendaOnlineResinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaOnlineResinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
