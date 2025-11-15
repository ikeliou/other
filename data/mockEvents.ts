export type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  remainingSeats: number;
  price: number;
  city: string;
  coverUrl?: string;
  hostName?: string;
  rating?: number;
}

export const mockEvents: Event[] = [
  {
    id: 'e1',
    title: '密室劇本：最後的晚餐',
    date: '2025-12-05',
    time: '19:00',
    remainingSeats: 2,
    price: 450,
    city: '台北',
    coverUrl: '/images/event1.jpg',
    hostName: '桌主小明',
    rating: 4.8
  },
  {
    id: 'e2',
    title: '懸疑短篇：午夜列車',
    date: '2025-12-06',
    time: '18:30',
    remainingSeats: 5,
    price: 350,
    city: '台北',
    coverUrl: '/images/event2.jpg',
    hostName: '桌主小華',
    rating: 4.5
  }
];
