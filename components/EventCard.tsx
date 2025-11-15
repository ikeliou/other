import React from 'react';
import { Event } from '../data/mockEvents';

type Props = {
  event: Event;
  onClick?: () => void;
};

export const EventCard: React.FC<Props> = ({ event, onClick }) => {
  return (
    <article
      className="flex flex-col bg-white rounded-md shadow-sm overflow-hidden min-h-[120px] cursor-pointer"
      onClick={onClick}
      role="button"
    >
      <div className="w-full h-40 bg-gray-100">
        {/* cover placeholder */}
        {event.coverUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={event.coverUrl} alt={event.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">No image</div>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-text-primary">{event.title}</h3>
          <div className="text-sm text-text-muted mt-1">{event.date} · {event.time} · {event.city}</div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-sm text-text-muted">剩餘席次 {event.remainingSeats}</div>
          <div className="text-right">
            <div className="text-sm text-text-muted">NT$</div>
            <div className="text-lg font-bold text-primary">{event.price}</div>
          </div>
        </div>
      </div>
    </article>
  );
};
export default EventCard;
