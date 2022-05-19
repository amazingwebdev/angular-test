import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HackerNewsService } from '@app-shared/services';
import { PagesModule } from '../pages.module';

import { CommentComponent } from './comment.component';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PagesModule
      ],
      declarations: [ CommentComponent ],
      providers: [
        HackerNewsService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
