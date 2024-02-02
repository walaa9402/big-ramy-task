import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EBooksDetailsComponent } from './e-books-details.component';

describe('EBooksDetailsComponent', () => {
  let component: EBooksDetailsComponent;
  let fixture: ComponentFixture<EBooksDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EBooksDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EBooksDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
