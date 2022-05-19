import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@app-shared/shared.module';

import { TopNavigationComponent } from './top-navigation.component';

describe('TopNavigationComponent', () => {
  let component: TopNavigationComponent;
  let fixture: ComponentFixture<TopNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ TopNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
