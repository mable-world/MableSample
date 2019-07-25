import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MableSampleComponent } from './mable-sample.component';

describe('MableSampleComponent', () => {
  let component: MableSampleComponent;
  let fixture: ComponentFixture<MableSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MableSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MableSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
