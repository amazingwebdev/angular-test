import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { HackerNewsService } from '@app-services/hacker-news.service';
import { StoryEntity } from 'app/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public stories: StoryEntity[] = []
  private sub = new Subscription()
  public loading: boolean;

  constructor(
    private hackerNews: HackerNewsService
  ) { }

  ngOnInit(): void {
    this.loading = true
    this.getTopStories()
  }

  getTopStories() {
    this.sub.add(
      this.hackerNews.getTopStories().pipe(switchMap(ids => {
        const requests = ids.splice(0, 30).map(id => this.hackerNews.getStory(id))
        return forkJoin(requests)
      })).subscribe(res => {
        this.stories = res
        this.loading = false
      }, () => { this.loading = false })
    )
    
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
