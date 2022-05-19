import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNavigationComponent } from './footer-navigation.component';

import { SharedModule } from '../../shared.module'

describe('FooterNavigationComponent', () => {
  let component: FooterNavigationComponent;
  let fixture: ComponentFixture<FooterNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ FooterNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
