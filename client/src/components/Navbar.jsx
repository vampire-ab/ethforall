import React, { useState } from "react";
import { BsCameraVideo, BsFillChatFill } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";
import Finder from "./Finder";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [account, setAccount] = useState();
  const [stream, setStream] = useState(false);
  const [streamName, setStreamName] = useState('');

  const { user } = useUser();
  const handleSubmit = () => {};
  return (
    <div className="bg-indigo-600 w-full">
      <div className="flex flex-wrap place-items-center w-full">
        <section className="relative mx-auto w-full">
          {/* <!-- navbar --> */}
          <nav className="flex justify-between text-white w-full">
            <div className="px-5 xl:px-12 py-6 flex justify-between w-full items-center">
              <Link to="/home">
                <div className="text-3xl font-bold font-heading">
                  {/* <!-- <img className="h-9" src="logo.png" alt="logo"> --> */}
                  Logo
                </div>
              </Link>
              <div className="text-black">
                <label>
                  <input
                    className="rounded px-2 py-1 focus:outline-none"
                    placeholder="Search"
                    onSubmit={handleSubmit}
                  ></input>
                </label>
              </div>
              {/* <Finder /> */}
              {/* <!-- Nav Links --> */}
              {/* <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <a className="hover:text-gray-200" href="#">
                    Home
                  </a>
                </li>
              </ul> */}
              {/* <!-- Header Icons --> */}
              <div className="hidden xl:flex space-x-5 items-center">
                {/* <a className="hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </a>
                <a className="flex items-center hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  </span>
                </a>*/}

                {account ? (
                  <Link to="/user">
                    <a
                      className="flex items-center hover:text-gray-200"
                      href="/user"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 hover:text-gray-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </a>
                  </Link>
                ) : (
                  <Link to="/signup">
                    <div>Create Account</div>
                  </Link>
                )}
              </div>
            </div>
            {/* <!-- Responsive navbar --> */}
            {/* <a className="xl:hidden flex items-center" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </a> */}
            {/* <div className="self-center mr-12 xl:hidden" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div> */}
          </nav>
        </section>
      </div>
      {/* <!-- Does this resource worth a follow? --> */}
      {user?.kyc === undefined && location.pathname !== '/create-stream' ? (
        <div className="fixed bottom-3 right-24 mb-4 z-10">
          <div className="">
            <div
              title="Stream Now"
              className="cursor-pointer peer w-16 h-16 flex flex-col ml-auto justify-center items-center rounded-full shadow transition-all hover:shadow-lg transform hover:scale-110 hover:-rotate-12"
            >
              <BsCameraVideo
                onClick={() => navigate('/create-stream')}
                className=" object-cover text-indigo-600 object-center w-10 h-10 transition-all duration-75 transform hover:scale-110 hover:-rotate-12"
                alt="Stream Now"
              />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {}
    </div>
  );
};

export default Navbar;
