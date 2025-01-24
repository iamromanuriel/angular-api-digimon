import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DncharacterComponent } from './dncharacter.component';

describe('DncharacterComponent', () => {
  let component: DncharacterComponent;
  let fixture: ComponentFixture<DncharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DncharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DncharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
