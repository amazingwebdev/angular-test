import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { HackerNewsService } from '@app-services/hacker-news.service';
import { CommentEntity, StoryEntity } from 'app/models';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit, OnDestroy {
  private storyId: string = ''
  public story: StoryEntity
  public comments: CommentEntity[] = []
  public loading: boolean
  public sub = new Subscription()

  constructor(
    private hackerNews: HackerNewsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.storyId = this.route.snapshot.queryParamMap.get('id') as string
    
    this.loading = true
    
    this.sub.add(
      this.hackerNews.getStory(this.storyId).pipe(switchMap(story => {
        this.story = story
        if(story && story.kids.length) {
          const commentRequests = story.kids.splice(0, 5).map(id => this.hackerNews.getComment(id))
  
          return forkJoin(commentRequests)
        }
      
        return of([])
      })).subscribe(res => {
        this.comments = res
        this.loading = false
      }, () => {
        this.loading = false
      })
    )
    
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}
