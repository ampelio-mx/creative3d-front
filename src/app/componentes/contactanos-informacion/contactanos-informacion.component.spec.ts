import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactanosInformacionComponent } from './contactanos-informacion.component';

describe('ContactanosInformacionComponent', () => {
  let component: ContactanosInformacionComponent;
  let fixture: ComponentFixture<ContactanosInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactanosInformacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactanosInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
