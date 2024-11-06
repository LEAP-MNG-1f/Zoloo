"use client";
import { useEffect, useState } from "react";
import Login from "./login/page";
import Signup from "./sign-up/page";

export default function Home() {
  const [users, setUser] = useState([]);
  // console.log(process.env.NEXT_PUBLIC_TEST);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch("DATABASE_URL");
        const data = await response.json();
        setUser(data);
        // console.log(response);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  // console.log(users[0]);

  // const BACKEND_ENDPOINT = "http://localhost:4000/sign-up";

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const userData = {
  //     name: event.target.name.value,
  //     password: event.target.password.value,
  //     email: "bb@gmail.com",
  //   };

  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(userData),
  //   };
  //   const response = await fetch(BACKEND_ENDPOINT, options);
  //   const data = await response.json();
  // };

  return (
    <div>
      <div className="flex flex-col w-20 h-20 border">
        {users.map((user, index) => {
          return <div key={index}>{user.name}</div>;
        })}
      </div>
      <Login />
      {/* <Dashboard /> */}
    </div>
  );
}

{
  /* // src/components/Dashboard.jsx */
}
/* import React from 'react'
import Header from '@/components/Header'
import StatsCard from '@/components/StatsCard'
import Charts from '@/components/Charts'
import RecentRecords from '@/components/RecentRecords'

// src/components/StatsCard.jsx
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'

const StatsCard = ({ type, amount, percentage, title, isBlue }) => {
  const formatAmount = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Math.abs(value))
  }

  return (
    <Card className={isBlue ? 'bg-blue-600 text-white' : ''}>
      <CardContent className="p-6">
        <div className="space-y-2">
          <div className={`text-sm ${isBlue ? 'opacity-80' : 'text-gray-500'}`}>
            {title}
          </div>
          <div className={`text-2xl font-bold ${type === 'expense' ? 'text-red-500' : ''}`}>
            {type === 'expense' ? '-' : ''}{formatAmount(amount)}₮
          </div>
          {percentage && (
            <div className={`text-sm ${
              type === 'income' ? 'text-green-500' : 'text-blue-500'
            }`}>
              {percentage}% from last month
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default StatsCard

// src/components/Charts.jsx
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const Charts = () => {
  const barChartData = [
    { month: 'Jul', income: 3000000, expense: 2000000 },
    { month: 'Jul', income: 2800000, expense: 2100000 },
    { month: 'Jul', income: 2900000, expense: 1900000 },
    { month: 'Jul', income: 3100000, expense: 2000000 },
    { month: 'Jul', income: 2700000, expense: 1800000 },
    { month: 'Jul', income: 2900000, expense: 1900000 },
    { month: 'Jul', income: 3000000, expense: 2000000 },
  ]

  const pieChartData = [
    { name: 'Bills', value: 15.5, color: '#3b82f6' },
    { name: 'Food', value: 15.5, color: '#ec4899' },
    { name: 'Shopping', value: 15.5, color: '#f97316' },
    { name: 'Insurance', value: 15.5, color: '#06b6d4' },
    { name: 'Clothing', value: 15.5, color: '#f59e0b' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardContent className="p-6">
          <div className="font-semibold mb-4">Income - Expense</div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barChartData}>
              <Bar dataKey="income" fill="#22c55e" />
              <Bar dataKey="expense" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="font-semibold mb-4">Income - Expense</div>
          <div className="flex flex-col md:flex-row justify-between">
            <ResponsiveContainer width={200} height={200}>
              <PieChart>
                <Pie
                  data={pieChartData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2">
              {pieChartData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="flex items-center">
                    <span
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: item.color }}
                    ></span>
                    {item.name}
                  </span>
                  <span className="ml-4">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Charts

// src/components/RecentRecords.jsx
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Home } from 'lucide-react'

const RecentRecords = () => {
  const recentRecords = [
    { id: 1, type: 'Lending & Renting', amount: -1000, time: '3 hours ago' },
    { id: 2, type: 'Lending & Renting', amount: -1000, time: '3 hours ago' },
    { id: 3, type: 'Lending & Renting', amount: -1000, time: '3 hours ago' },
    { id: 4, type: 'Lending & Renting', amount: -1000, time: '3 hours ago' },
    { id: 5, type: 'Lending & Renting', amount: -1000, time: '3 hours ago' },
  ]

  return (
    <Card>
      <CardContent className="p-6">
        <div className="font-semibold mb-4">Last Records</div>
        <div className="space-y-4">
          {recentRecords.map((record) => (
            <div key={record.id} className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Home className="text-blue-600" size={20} />
                </div>
                <div>
                  <div className="font-medium">{record.type}</div>
                  <div className="text-sm text-gray-500">{record.time}</div>
                </div>
              </div>
              <div className="text-green-500">{record.amount}₮</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default RecentRecords
    </div>
  );
} */
