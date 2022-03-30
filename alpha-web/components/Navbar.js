import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function Navbar() {
  return (
    <div>
      <Menu as="div">
        <Menu.Button className="flex-column justify-center w-full px-4 py-3 text-7xl  font-Teko text-white bg-black  ">
          ALPHA BCZ
          <ChevronDownIcon
            className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
        {/*  <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        > */}{" "}
        <Menu.Items>
          <div className="px-0 py-0 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active
                      ? "justify-center w-full px-4 py-2 text-2xl  font-Teko text-white bg-black  hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                      : "justify-center w-full px-4 py-2 text-2xl  font-Teko text-white bg-black  hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                  } `}
                >
                  GALLERY
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active
                      ? "justify-center w-full px-4 py-2 text-2xl  font-Teko text-white bg-black  hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                      : "justify-center w-full px-4 py-2 text-2xl  font-Teko text-white bg-black  hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                  } `}
                >
                  PORTFOLIO
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active
                      ? "justify-center w-full px-4 py-2 text-2xl  font-Teko text-white bg-black  hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                      : "justify-center w-full px-4 py-2 text-2xl  font-Teko text-white bg-black  hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                  } `}
                >
                  CONTACT
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
        {/*   </Transition> */}
      </Menu>
    </div>
  );
}
