import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguroHijoComponent } from './seguro-hijo.component';

describe('SeguroHijoComponent', () => {
  let component: SeguroHijoComponent;
  let fixture: ComponentFixture<SeguroHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeguroHijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeguroHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
