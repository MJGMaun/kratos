import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMytiComponent } from './home-myti.component';

describe('HomeMytiComponent', () => {
  let component: HomeMytiComponent;
  let fixture: ComponentFixture<HomeMytiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMytiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMytiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
