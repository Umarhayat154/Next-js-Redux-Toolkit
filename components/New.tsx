'use client';

import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

export default function New() {
  const count = useSelector((state: RootState) => state.counter.value);
  
  return (
    <div className="bg-blue-100 p-4 rounded-lg mb-4">
      <h2 className="text-xl font-bold">New Component</h2>
      <p className="text-lg">Counter value from Redux: {count}</p>
    </div>
  );
}