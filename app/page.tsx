'use client';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from '@/store/slices/counterSlice';
import type { RootState } from '../store/store';
import New from '../components/New';

export default function App() {
  const [amount, setAmount] = useState<number>(0);
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());jdldkkjsjlkdsk
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleResetClick() {
    dispatch(reset());
  }

  function handleIncrementByAmountClick() {
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className="container mx-auto p-8 max-w-md">
      <New/>
      <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Counter App
        </h1>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handleIncrementClick}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-xl"
          >
            +
          </button>
          
          <p className="text-4xl font-bold text-blue-600">
            Count: {count}
          </p>
          
          <button
            onClick={handleDecrementClick}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg text-xl"
          >
            -
          </button>
        </div>

        <div className="text-center">
          <button
            onClick={handleResetClick}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-8 rounded-lg"
          >
            Reset
          </button>
        </div>

        <div className="space-y-3">
          <input
            type="number"
            value={amount}
            placeholder="Enter amount"
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-gray-800"
          />
          
          <button
            onClick={handleIncrementByAmountClick}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
          >
            Increment by amount
          </button>
        </div>
      </div>
    </div>
  );
}