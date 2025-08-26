import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderConstruction } from './underconstruction';

describe('UnderConstruction', () => {
  let component: UnderConstruction;
  let fixture: ComponentFixture<UnderConstruction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnderConstruction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderConstruction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
