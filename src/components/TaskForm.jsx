import React from 'react';

const TaskForm = () => (
  <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
      <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
        Contact Form
      </h1>
      <form className="mt-6">
        <div className="mb-2">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            <span className="text-gray-700">Your name</span>
            <input
              type="text"
              name="name"
              className="

            w-full
            block px-16 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              placeholder="John cooks"
            />
          </label>
        </div>
        <div className="mb-2">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            <span className="text-gray-700">Email address</span>
            <input
              name="email"
              type="email"
              className="
            block
            w-full
            mt-2 px-16 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              placeholder="john.cooks@example.com"
              required
            />
          </label>
        </div>
        <div className="mb-2">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            <span className="text-gray-700">Message</span>
            <textarea
              name="message"
              className="
            block
            w-full
            mt-2 px-16 py-8
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              rows="5"
            />
          </label>
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
          >
            Contact Us
          </button>
        </div>
        <div />
      </form>
    </div>
  </div>
);

export default TaskForm;
