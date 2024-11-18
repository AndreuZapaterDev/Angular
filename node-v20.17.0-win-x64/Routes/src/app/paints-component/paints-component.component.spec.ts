import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintsComponentComponent } from './paints-component.component';

describe('PaintsComponentComponent', () => {
  let component: PaintsComponentComponent;
  let fixture: ComponentFixture<PaintsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaintsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
