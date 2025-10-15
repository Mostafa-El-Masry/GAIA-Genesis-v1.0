"use client";
import { useState } from "react";

import React from "react";

const WealthTracker = () => {
  const [date, setDate] = useState();
  const [desc, setDesc] = useState();
  const [amount, setAmount] = useState();
  const [type, setType] = useState();
  const [category, setCategory] = useState();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-center">💰 Wealth Tracker</h2>
    </div>
  );
};

export default WealthTracker;
