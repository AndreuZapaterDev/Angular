import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistComponentComponent } from './artist-component.component';

describe('ArtistComponentComponent', () => {
  let component: ArtistComponentComponent;
  let fixture: ComponentFixture<ArtistComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
