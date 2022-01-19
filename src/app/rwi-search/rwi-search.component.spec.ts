import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RwiSearchComponent } from './rwi-search.component';

describe('RwiSearchComponent', () => {
  let component: RwiSearchComponent;
  let fixture: ComponentFixture<RwiSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RwiSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RwiSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
