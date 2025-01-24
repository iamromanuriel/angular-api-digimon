import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnmenuComponent } from './dnmenu.component';

describe('DnmenuComponent', () => {
  let component: DnmenuComponent;
  let fixture: ComponentFixture<DnmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DnmenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DnmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
