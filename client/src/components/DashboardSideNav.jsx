import React from "react";

const DashboardSideNav = () => {
  return (
    <aside className="relative bg-indigo-600 h-screen w-64 hidden sm:block shadow-xl">
      <div className="p-6">
        <a
          href="/"
          className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
        >
          Admin
        </a>
        <button className="w-full bg-white text-indigo-600 font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
          <i className="fas fa-plus mr-3"></i> New Report
        </button>
      </div>
      <nav className="text-white text-base font-semibold pt-3">
        <a
          href="/"
          className="flex items-center text-white py-4 pl-6 hover:bg-indigo-500" /* active link should have a color */
        >
          <i className="fas fa-tachometer-alt mr-3"></i>
          Dashboard
        </a>
        <a
          href="/blank"
          className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 hover:bg-indigo-500"
        >
          <i className="fas fa-sticky-note mr-3"></i>
          Blank Page
        </a>
      </nav>
      <a
        href="#"
        className="absolute w-full upgrade-btn bottom-0 text-white flex items-center justify-center py-4"
      >
        <i className="fas fa-arrow-circle-up mr-3"></i>
        Upgrade to Pro!
      </a>
      <a
        href="tables.html"
        className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 hover:bg-indigo-500"
      >
        <i className="fas fa-table mr-3"></i>
        Tables
      </a>
      <a
        href="forms.html"
        className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 hover:bg-indigo-500"
      >
        <i className="fas fa-align-left mr-3"></i>
        Forms
      </a>
      <a
        href="tabs.html"
        className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 hover:bg-indigo-500"
      >
        <i className="fas fa-tablet-alt mr-3"></i>
        Tabbed Content
      </a>
      <a
        href="calendar.html"
        className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 hover:bg-indigo-500"
      >
        <i className="fas fa-calendar mr-3"></i>
        Calendar
      </a>
      <a
        href="#"
        className="absolute w-full bg-indigo-500 bottom-0 text-white flex items-center justify-center py-4"
      >
        <i className="fas fa-arrow-circle-up mr-3"></i>
        Upgrade to Pro!
      </a>
    </aside>
  );
};

export default DashboardSideNav;
