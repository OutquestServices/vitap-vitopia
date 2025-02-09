'use client'
import React, { useEffect, useState } from 'react';
import { useTable, usePagination } from 'react-table';
import { motion } from "framer-motion";
import { signIn, useSession } from 'next-auth/react';
import { generateToken } from '@/lib/jwttoken';

export default function Registrations() {
  const [data, setData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalParticipants, setTotalParticipants] = useState(0);
  const [todayParticipants, setTodayParticipants] = useState(0);
  const { data: session, status } = useSession();
  const [sportFilter, setSportFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch data only if a session exists
  useEffect(() => {
    if (!session) return; // Do nothing if not authenticated

    const fetchData = async () => {
      try {
        const generated_token = generateToken(session?.user, 60 * 60 * 24);

        const response = await fetch('/api/fetch/registrations', {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_API_TOKEN}`,
            'Token': generated_token
          }
        });

        if (response.status !== 200) {
          throw new Error('There was an error occurred. Please refresh the page.');
        }
        const result = await response.json();
        setData(result?.data || []);

        // Calculate totals
        const total = result.data.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
        const participants = result.data.length;
        const today = new Date().toISOString().slice(0, 10);
        const registeredToday = result.data.filter(item => item.purchasedAt.startsWith(today)).length;

        setTotalAmount(total);
        setTotalParticipants(participants);
        setTodayParticipants(registeredToday);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, [session]);

  // Define columns (memoized so they don’t change on every render)
  const columns = React.useMemo(() => [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Sport', accessor: 'sport' },
    { Header: 'Amount', accessor: 'amount' },
    { Header: 'Purchased At', accessor: 'purchasedAt' },
    { Header: 'Invoice ID', accessor: 'invoiceId' },
    { Header: 'Order ID', accessor: 'orderId' },
    { Header: 'Receipt ID', accessor: 'receiptId' },
    { Header: 'University', accessor: 'universityName' },
    { Header: 'Coach Name', accessor: 'coachName' },
    { Header: 'Coach Mobile', accessor: 'coachMobile' },
  ], []);

  // Compute filtered data based on the search term and sport filter.
  // (Using useMemo avoids having a separate state and useEffect for filtering.)
  const filteredData = React.useMemo(() => {
    return data.filter(item => (
      (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
       item.universityName.toLowerCase().includes(searchTerm.toLowerCase()) ||
       item.sport.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (sportFilter === '' || item.sport === sportFilter)
    ));
  }, [data, searchTerm, sportFilter]);

  // Setup the table instance with pagination using filtered data.
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    { columns, data: filteredData, initialState: { pageIndex: 0, pageSize: 10 } },
    usePagination
  );

  // Compute unique sports (from the full data) for the dropdown
  const uniqueSports = React.useMemo(() => {
    return Array.from(new Set(data.map(item => item.sport)));
  }, [data]);

  // Show a spinner while the session is loading
  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <motion.div
          className="w-12 h-12 border-t-4 border-blue-500 rounded-full animate-spin"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        ></motion.div>
      </div>
    );
  }

  // If the user is not authenticated, show the sign in view
  if (!session) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-black min-h-screen flex flex-col items-center justify-center gap-10 p-4"
      >
        <h1 className="text-4xl font-bold text-white mb-4">Access Denied</h1>
        <p className="text-xl text-gray-300">You are not authenticated. Please sign in.</p>
        <button
          onClick={() => signIn("google", { callbackUrl: "/auth/role-bridge" })}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Sign In
        </button>
      </motion.div>
    );
  }

  // If data hasn't been fetched yet, show a loading spinner
  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <motion.div
          className="w-12 h-12 border-t-4 border-blue-500 rounded-full animate-spin"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        ></motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-5 text-center md:px-18 lg:px-24 pt-20 md:pt-28">
      <h1 className="font-bold p-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Registered People
      </h1>
      <div className="font-bold text-xl mb-4 flex flex-col relative items-start py-6 gap-3">
        <p>Total Amount Generated: ₹{totalAmount.toFixed(2)}</p>
        <p>Total Participants: {totalParticipants}</p>
        <p>Participants Registered Today: {todayParticipants}</p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center p-4">
        <input
          type="text"
          placeholder="Search by name, email, university or sport"
          className="w-[300px] h-[50px] bg-white text-black rounded-md p-2"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select
          className="w-[300px] h-[50px] bg-white text-black rounded-md p-2"
          value={sportFilter}
          onChange={e => setSportFilter(e.target.value)}
        >
          <option value="">All Sports</option>
          {uniqueSports.map((sport, index) => (
            <option key={index} value={sport}>
              {sport}
            </option>
          ))}
        </select>
      </div>
      <div className="overflow-x-auto">
        <table {...getTableProps()} className="w-full border-collapse">
          <thead>
            {headerGroups.map((headerGroup, hIndex) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={hIndex}>
                {headerGroup.headers.map((column, cIndex) => (
                  <th
                    {...column.getHeaderProps()}
                    key={cIndex}
                    className="px-4 py-2 border-b-2 border-gray-600 bg-gray-800 text-left font-bold"
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, rowIndex) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={rowIndex}>
                  {row.cells.map((cell, cellIndex) => (
                    <td
                      {...cell.getCellProps()}
                      key={cellIndex}
                      className="px-4 py-2 border-b border-gray-600 bg-gray-700 text-left"
                    >
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="pagination flex gap-4 relative items-center justify-center p-8">
        <button
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          className="border rounded-sm px-1 hover:bg-white hover:text-black"
        >
          {'<<'}
        </button>{' '}
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="border rounded-sm px-1 hover:bg-white hover:text-black"
        >
          {'<'}
        </button>{' '}
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="border rounded-sm px-1 hover:bg-white hover:text-black"
        >
          {'>'}
        </button>{' '}
        <button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          className="border rounded-sm px-1 hover:bg-white hover:text-black"
        >
          {'>>'}
        </button>{' '}
        <span>
          Page <strong>{pageIndex + 1} of {pageOptions.length}</strong>{' '}
        </span>
        <select
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}
          className="bg-black text-white border rounded-sm p-1"
        >
          {[10, 20, 50, 100].map(size => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
