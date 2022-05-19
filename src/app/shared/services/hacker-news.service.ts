import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { StoryEntity, CommentEntity } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class HackerNewsService {
  private basePath = 'https://hacker-news.firebaseio.com/v0/';

  constructor(private http: HttpClient) {}

  getTopStories(): Observable<number[]> {
    return this.http.get<number[]>(
      `${this.basePath}/topstories.json?print=pretty`
    );
  }

  getStory(id: number | string): Observable<StoryEntity> {
    return this.http
      .get<StoryEntity>(`${this.basePath}/item/${id}.json?print=pretty`)
      .pipe(
        map((res) => ({
          ...res,
          website: res.url.split('/')[2],
        }))
      );
  }

  getComment(id: number | string): Observable<CommentEntity> {
    return this.http
      .get<CommentEntity>(`${this.basePath}/item/${id}.json?print=pretty`)
      .pipe(filter((comment) => !comment.deleted));
  }
}
