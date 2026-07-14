import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorRoute } from './indoor-route';

describe('IndoorRoute', () => {
  let component: IndoorRoute;
  let fixture: ComponentFixture<IndoorRoute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndoorRoute],
    }).compileComponents();

    fixture = TestBed.createComponent(IndoorRoute);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
