import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrecuentlyAskedQuestionsComponent } from './frecuently-asked-questions.component';

describe('FrecuentlyAskedQuestionsComponent', () => {
  let component: FrecuentlyAskedQuestionsComponent;
  let fixture: ComponentFixture<FrecuentlyAskedQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrecuentlyAskedQuestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrecuentlyAskedQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
