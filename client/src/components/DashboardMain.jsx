import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = ({ type, title, data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  if (type === "bar") {
    return <Bar options={options} data={data} />;
  } else if (type === "line") {
    return <Line options={options} data={data} />;
  }
};

const DashboardMain = () => {
  const [isOpen, setIsOpen] = useState(false);

  const barChartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const lineChartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        //pointBackgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff", "#ff9f40"],
        pointBorderColor: "rgba(0, 0, 0, 0.1)",
        pointBorderWidth: 1,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
        },
      },
    },
  };

  return (
    <div className="w-full flex flex-col h-screen overflow-y-hidden">
      {/* Desktop Header */}
      <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
        <div className="w-1/2"></div>
        <div className="relative w-1/2 flex justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none"
          >
            <img
              src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
              alt="User"
            />
          </button>
          {isOpen && (
            <div className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
              <a
                href="#"
                className="block px-4 py-2 account-link hover:text-white hover:bg-indigo-600"
              >
                Account
              </a>
              <a
                href="#"
                className="block px-4 py-2 account-link hover:text-white hover:bg-indigo-600"
              >
                Support
              </a>
              <a
                href="#"
                className="block px-4 py-2 account-link hover:text-white hover:bg-indigo-600"
              >
                Sign Out
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Header */}
      <header className="w-full bg-sidebar py-5 px-6 sm:hidden">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
          >
            Admin
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            <i className={!isOpen ? "fas fa-bars" : "fas fa-times"}></i>
          </button>
        </div>

        {/* Dropdown Nav */}
        {isOpen && (
          <nav className="flex flex-col pt-4">
            <a
              href="/"
              className="flex items-center active-nav-link text-white py-2 pl-4 nav-item"
            >
              <i className="fas fa-tachometer-alt mr-3"></i>
              Dashboard
            </a>
            {/* Add other navigation items here */}
          </nav>
        )}
      </header>

      <div className="w-full overflow-x-hidden border-t flex flex-col">
        <main className="w-full flex-grow p-6">
          <h1 className="text-3xl text-black pb-6">Dashboard</h1>

          <div className="flex flex-wrap mt-6">
            <div className="w-full lg:w-1/2 pr-0 lg:pr-2">
              <p className="text-xl pb-3 flex items-center">
                <i className="fas fa-plus mr-3"></i> Monthly Reports
              </p>
              <div className="p-6 bg-white">
                <ChartComponent
                  type="bar"
                  title="Monthly Reports"
                  data={barChartData}
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 pl-0 lg:pl-2 mt-12 lg:mt-0">
              <p className="text-xl pb-3 flex items-center">
                <i className="fas fa-check mr-3"></i> Resolved Reports
              </p>
              <div className="p-6 bg-white">
                <ChartComponent
                  type="line"
                  title="Resolved Reports"
                  data={lineChartData}
                  options={lineChartOptions}
                />
              </div>
            </div>
          </div>

          <div className="w-full mt-12">
            <p className="text-xl pb-3 flex items-center">
              <i className="fas fa-list mr-3"></i> Latest Reports
            </p>
            <div className="bg-white overflow-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                      Name
                    </th>
                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                      Last name
                    </th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                      Phone
                    </th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="w-1/3 text-left py-3 px-4">Lian</td>
                    <td className="w-1/3 text-left py-3 px-4">Smith</td>
                    <td className="text-left py-3 px-4">
                      <a className="hover:text-blue-500" href="tel:622322662">
                        622322662
                      </a>
                    </td>
                    <td className="text-left py-3 px-4">
                      <a
                        className="hover:text-blue-500"
                        href="mailto:jonsmith@mail.com"
                      >
                        jonsmith@mail.com
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="w-1/3 text-left py-3 px-4">Emma</td>
                    <td className="w-1/3 text-left py-3 px-4">Johnson</td>
                    <td className="text-left py-3 px-4">
                      <a className="hover:text-blue-500" href="tel:622322662">
                        622322662
                      </a>
                    </td>
                    <td className="text-left py-3 px-4">
                      <a
                        className="hover:text-blue-500"
                        href="mailto:jonsmith@mail.com"
                      >
                        jonsmith@mail.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-1/3 text-left py-3 px-4">Oliver</td>
                    <td className="w-1/3 text-left py-3 px-4">Williams</td>
                    <td className="text-left py-3 px-4">
                      <a className="hover:text-blue-500" href="tel:622322662">
                        622322662
                      </a>
                    </td>
                    <td className="text-left py-3 px-4">
                      <a
                        className="hover:text-blue-500"
                        href="mailto:jonsmith@mail.com"
                      >
                        jonsmith@mail.com
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="w-1/3 text-left py-3 px-4">Isabella</td>
                    <td className="w-1/3 text-left py-3 px-4">Brown</td>
                    <td className="text-left py-3 px-4">
                      <a className="hover:text-blue-500" href="tel:622322662">
                        622322662
                      </a>
                    </td>
                    <td className="text-left py-3 px-4">
                      <a
                        className="hover:text-blue-500"
                        href="mailto:jonsmith@mail.com"
                      >
                        jonsmith@mail.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-1/3 text-left py-3 px-4">Lian</td>
                    <td className="w-1/3 text-left py-3 px-4">Smith</td>
                    <td className="text-left py-3 px-4">
                      <a className="hover:text-blue-500" href="tel:622322662">
                        622322662
                      </a>
                    </td>
                    <td className="text-left py-3 px-4">
                      <a
                        className="hover:text-blue-500"
                        href="mailto:jonsmith@mail.com"
                      >
                        jonsmith@mail.com
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="w-1/3 text-left py-3 px-4">Emma</td>
                    <td className="w-1/3 text-left py-3 px-4">Johnson</td>
                    <td className="text-left py-3 px-4">
                      <a className="hover:text-blue-500" href="tel:622322662">
                        622322662
                      </a>
                    </td>
                    <td className="text-left py-3 px-4">
                      <a
                        className="hover:text-blue-500"
                        href="mailto:jonsmith@mail.com"
                      >
                        jonsmith@mail.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-1/3 text-left py-3 px-4">Oliver</td>
                    <td className="w-1/3 text-left py-3 px-4">Williams</td>
                    <td className="text-left py-3 px-4">
                      <a className="hover:text-blue-500" href="tel:622322662">
                        622322662
                      </a>
                    </td>
                    <td className="text-left py-3 px-4">
                      <a
                        className="hover:text-blue-500"
                        href="mailto:jonsmith@mail.com"
                      >
                        jonsmith@mail.com
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="w-1/3 text-left py-3 px-4">Isabella</td>
                    <td className="w-1/3 text-left py-3 px-4">Brown</td>
                    <td className="text-left py-3 px-4">
                      <a className="hover:text-blue-500" href="tel:622322662">
                        622322662
                      </a>
                    </td>
                    <td className="text-left py-3 px-4">
                      <a
                        className="hover:text-blue-500"
                        href="mailto:jonsmith@mail.com"
                      >
                        jonsmith@mail.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>

        <footer className="w-full bg-white text-right p-4">
          Built by{" "}
          <a
            target="_blank"
            href="https://davidgrzyb.com"
            className="underline"
          >
            David Grzyb
          </a>
          .
        </footer>
      </div>
    </div>
  );
};

export default DashboardMain;
