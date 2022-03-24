interface Media {
  m: string;
}

export interface Photo {
  id: string;
  title: string;
  link: string;
  media: Media;
  date_taken: Date;
  description: string;
  published: Date;
  author: string;
  author_id: string;
  tags: string;
}
