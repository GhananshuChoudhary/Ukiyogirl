export interface Destination {
  id: string;
  name: string;
  nameMr: string;
  description: string;
  descriptionMr: string;
  tag: string;
  tagMr: string;
  image: string;
  season: string;
  seasonMr: string;
  climate: string;
  climateMr: string;
}

export interface Quote {
  id: string;
  text: string;
  textMr: string;
  bookText?: string;
  chapter: string;
  chapterMr: string;
  page?: string;
  pageMr?: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  titleMr: string;
  stage: string;
  stageMr: string;
  description: string;
  descriptionMr: string;
  detail: string;
  detailMr: string;
}

export interface ExperienceLesson {
  id: string;
  title: string;
  titleMr: string;
  subtitle: string;
  subtitleMr: string;
  icon: string;
  text: string;
  textMr: string;
  lesson: string;
  lessonMr: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  caption: string;
  captionMr: string;
  category: string;
  categoryMr: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export interface ReaderBenefit {
  id: string;
  title: string;
  titleMr: string;
  description: string;
  descriptionMr: string;
  target: string;
  targetMr: string;
  icon: string;
}
