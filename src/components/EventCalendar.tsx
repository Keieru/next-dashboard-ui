'use client';

import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: 'Meeting with Client',
    time: '9:00 AM - 10:00 AM',
    description: 'Discuss project requirements and next steps.',
  },
  {
    id: 2,
    title: 'Team Standup',
    time: '10:30 AM - 11:00 AM',
    description: 'Daily team meeting to review progress and blockers.',
  },
  {
    id: 3,
    title: 'Lunch Break',
    time: '12:00 PM - 1:00 PM',
    description: 'Take a break and have lunch.',
  },
  {
    id: 4,
    title: 'Code Review',
    time: '2:00 PM - 3:30 PM',
    description: 'Review pull requests and provide feedback.',
  },
  {
    id: 5,
    title: 'Project Planning',
    time: '4:00 PM - 5:00 PM',
    description: 'Plan upcoming sprint tasks and milestones.',
  },
  {
    id: 6,
    title: 'Wrap-up Meeting',
    time: '5:30 PM - 6:00 PM',
    description: 'End-of-day meeting to recap the day’s work.',
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-sky even:border-t-purple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-xs">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
