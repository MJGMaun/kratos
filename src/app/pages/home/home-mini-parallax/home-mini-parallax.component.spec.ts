import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMiniParallaxComponent } from './home-mini-parallax.component';

describe('HomeMiniParallaxComponent', () => {
  let component: HomeMiniParallaxComponent;
  let fixture: ComponentFixture<HomeMiniParallaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMiniParallaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMiniParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
