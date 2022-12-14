import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdetailsContratComponent } from './showdetails-contrat.component';

describe('ShowdetailsContratComponent', () => {
  let component: ShowdetailsContratComponent;
  let fixture: ComponentFixture<ShowdetailsContratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowdetailsContratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowdetailsContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
