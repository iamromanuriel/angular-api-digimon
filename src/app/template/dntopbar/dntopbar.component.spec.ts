import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DntopbarComponent } from './dntopbar.component';

describe('DntopbarComponent', () => {
  let component: DntopbarComponent;
  let fixture: ComponentFixture<DntopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DntopbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DntopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
