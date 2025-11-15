import type { NextPage } from 'next';
import Head from 'next/head';
import { mockEvents } from '../data/mockEvents';
import EventCard from '../components/EventCard';

const Home: NextPage = () => {
  return (
    <> 
      <Head>
        <title>劇本殺揪團 — 首頁</title>
      </Head>
      <main className="min-h-screen p-4 bg-bg">
        <header className="max-w-4xl mx-auto mb-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">找同好、揪一桌劇本殺</h1>
            <button className="px-4 py-2 bg-primary text-white rounded-md">發起場次</button>
          </div>
          <div className="mt-4">
            <input
              className="w-full p-3 rounded-md border border-gray-200"
              placeholder="搜尋城市/劇本/主辦"
              aria-label="搜尋活動"
            />
          </div>
        </header>

        <section className="max-w-4xl mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {mockEvents.map(e => (
            <EventCard key={e.id} event={e} onClick={() => { /* navigate to detail */ }} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
