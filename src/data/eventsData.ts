import { images } from './images';

export type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  summary: string;
  image: string;
};

export const events: EventItem[] = [];
