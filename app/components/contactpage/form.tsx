import React from 'react';

const Form = () => {
  return (
    <div>
      <section className="bg-white text-rubik text-black">
        <div className=" px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center lg:text-6xl">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 text-xl lg:text-2xl">
            Interested in our services? Have any questions? Reach out to us!
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 lg:text-2xl"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="John"
                required
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 lg:text-2xl"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="number"
                className="block mb-2 text-sm font-medium text-gray-900 lg:text-2xl"
              >
                Please share your preferred contact number
              </label>
              <input
                type="tel"
                placeholder="(###)-(###)-(####)"
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                required
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 lg:text-2xl"
              >
                Your message
              </label>
              <textarea
                id="message"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <div className="flex justify-center pt-5">
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-gray-300 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Form;
