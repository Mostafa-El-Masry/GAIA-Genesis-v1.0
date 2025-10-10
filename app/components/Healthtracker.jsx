"use client";
import { useState } from "react";

export default function HealthTracker() {
  // one piece of state for each field
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [glucose, setGlucose] = useState("");
  const [insulin, setInsulin] = useState("");
  const [notes, setNotes] = useState("");
  const [records, setRecords] = useState([]);

  function handleAdd() {
    // create one record object
    const newRecord = {
      date,
      time,
      glucose,
      insulin,
      notes,
    };

    // add it to the array
    setRecords([...records, newRecord]);

    // clear the form fields
    setDate("");
    setTime("");
    setGlucose("");
    setInsulin("");
    setNotes("");
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow max-w-lg">
      <h2 className="text-xl font-bold mb-4 text-center">🩺 Health Tracker</h2>

      {/* Date */}
      <label className="block mb-2 text-sm font-medium">Date</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full mb-4 border rounded px-2 py-1"
      />

      {/* Time */}
      <label className="block mb-2 text-sm font-medium">Time</label>
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="w-full mb-4 border rounded px-2 py-1"
      />

      {/* Glucose */}
      <label className="block mb-2 text-sm font-medium">Glucose (mg/dL)</label>
      <input
        type="number"
        value={glucose}
        onChange={(e) => setGlucose(e.target.value)}
        className="w-full mb-4 border rounded px-2 py-1"
      />

      {/* Insulin */}
      <label className="block mb-2 text-sm font-medium">Insulin Units</label>
      <input
        type="number"
        value={insulin}
        onChange={(e) => setInsulin(e.target.value)}
        className="w-full mb-4 border rounded px-2 py-1"
      />

      {/* Notes */}
      <label className="block mb-2 text-sm font-medium">Notes</label>
      <input
        type="text"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Before breakfast, after lunch..."
        className="w-full mb-4 border rounded px-2 py-1"
      />
      <div className="mt-6 bg-white p-3 rounded border text-sm">
        <p>
          <strong>Date:</strong> {date}
        </p>
        <p>
          <strong>Time:</strong> {time}
        </p>
        <p>
          <strong>Glucose:</strong> {glucose}
        </p>
        <p>
          <strong>Insulin:</strong> {insulin}
        </p>
        <p>
          <strong>Notes:</strong> {notes}
        </p>
      </div>
      <button
        onClick={handleAdd}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition"
      >
        ➕ Add Reading
      </button>
      {records.length > 0 && (
        <div className="mt-6  ">
          <h3 className="text-lg font-semibold mb-2">📋 Readings</h3>
          <p className="text-gray-500 text-sm mb-2">
            Total Readings: {records.length}
          </p>

          <table className="w-full max-w-lg border text-sm bg-white rounded">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Time</th>
                <th className="p-2 border">Glucose</th>
                <th className="p-2 border">Insulin</th>
                <th className="p-2 border">Notes</th>
              </tr>
            </thead>
            <tbody>
              {records
                .slice()
                .reverse()
                .map((r, i) => (
                  <tr key={i}>
                    <td className="p-2 border">{r.date}</td>
                    <td className="p-2 border">{r.time}</td>
                    <td className="p-2 border">{r.glucose}</td>
                    <td className="p-2 border">{r.insulin}</td>
                    <td className="p-2 border">{r.notes}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
