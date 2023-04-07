import React from "react";

const Form = () => {
  return (
    <div className="p-8 text-left w-full">
      {/* TODO: FORM ACTION */}
      <form action="#" method="POST">
        <div className="w-full">
          {/* Input Name */}
          <div className="flex flex-col">
            <label className="capitalize text-sm py-2 font-extralight">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="border-2 rounded-lg p-3 
                  flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
            />
          </div>

          {/* Input Phone */}
          <div className="flex flex-col my-2">
            <label className="capitalize text-sm py-2 font-extralight">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              className="border-2 rounded-lg p-3 
                  flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
            />
          </div>

          {/* Input Name */}
          <div className="flex flex-col my-2">
            <label className="capitalize text-sm py-2 font-extralight">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="border-2 rounded-lg p-3 
                  flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
            />
          </div>

          {/* Input Name */}
          <div className="flex flex-col my-2">
            <label className="capitalize text-sm py-2 font-extralight">
              Message
            </label>

            <textarea
              name="message"
              rows="10"
              className="border-2 rounded-lg p-3 
                  flex focus:outline-none border-gray-400 
                  dark:bg-gray-900 dark:text-white resize-none"
            ></textarea>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button type="button"
            className="my-3 bg-gradient-to-r from-blue-600 
          to-teal-500 text-white px-6 py-3 rounded-md
          tracking-wide cursor-pointer hover:scale-110 duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
