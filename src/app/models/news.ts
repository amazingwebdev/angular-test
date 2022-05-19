export interface StoryEntity {
    by: string;
    descendants: number;
    id: string;
    kids: number[];
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;
    website?: string
}

export interface CommentEntity {
    by: string;
    id: number;
    kids: number[];
    parent: number;
    text: string;
    time: number;
    type: string;
    deleted?: boolean

}