'use client';

import Image from 'next/image';

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 123,
    expenses: 123,
  },
  {
    name: 'Feb',
    income: 456,
    expenses: 234,
  },
  {
    name: 'Mar',
    income: 789,
    expenses: 345,
  },
  {
    name: 'Apr',
    income: 1011,
    expenses: 456,
  },
  {
    name: 'May',
    income: 1213,
    expenses: 567,
  },
  {
    name: 'Jun',
    income: 1415,
    expenses: 678,
  },
  {
    name: 'Jul',
    income: 1617,
    expenses: 789,
  },
  {
    name: 'Aug',
    income: 1819,
    expenses: 890,
  },
  {
    name: 'Sep',
    income: 2021,
    expenses: 1234,
  },
  {
    name: 'Oct',
    income: 2223,
    expenses: 2345,
  },
  {
    name: 'Nov',
    income: 2425,
    expenses: 3456,
  },
  {
    name: 'Dec',
    income: 2627,
    expenses: 4567,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendence</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: '#d1d5db' }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: '#d1d5db' }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: '20px', paddingBottom: '20px' }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line type="monotone" dataKey="expenses" stroke="#CFCEFF" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
