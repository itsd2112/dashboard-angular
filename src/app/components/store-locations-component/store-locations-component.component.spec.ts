import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreLocationComponent } from './store-locations-component.component';

describe('StoreLocationComponentComponent', () => {
  let component: StoreLocationComponent;
  let fixture: ComponentFixture<StoreLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
