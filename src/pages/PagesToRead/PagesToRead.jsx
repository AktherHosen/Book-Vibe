import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { getBooksFromLS } from "../../utils/localStorage";

const PagesToRead = () => {
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const storedReadBooks = getBooksFromLS("read");
    setReadBooks(storedReadBooks);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
      className="overflow-hidden flex justify-center "
    >
      <BarChart
        width={800}
        height={500}
        data={readBooks}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={40}
      >
        <XAxis
          dataKey="bookName"
          scale="point"
          padding={{ left: 80, right: 80 }}
        />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar
          dataKey="totalPages"
          fill="#8884d8"
          background={{ fill: "#eee" }}
        />
      </BarChart>
    </div>
  );
};

export default PagesToRead;
