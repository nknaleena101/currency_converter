import React from 'react'

export default function MainPage() {
  return (
    <div>
      <h1 className='lg:mx-32 text-5xl font-bold text-green-500'>Convert Your Currencies Today</h1>
      <p class="lg:mx-32 opacity-40 py-6">Welcome to "Convert Your Currencies Today"! This application allows you to easily convert currencies based on the latest exchange rates. Whetheryou're planning a trip, managing your finances, or simply curious about the value of your money in different currencies, this tool is here to help.</p>

      <div className='mt-5 flex flex-col items-center justify-center'>
        <section className='lg:w-1/2 w-full'>
          <form>
              <div class="mb-4">
                <label for="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                <input type="date" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 outline-0" required />
              </div>
              <div class="mb-4">
                <label for="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Surce Currency</label>
                <select name="" id="" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 outline-0'>
                  <option value="1">Currency 1</option>
                  <option value="2">Currency 2</option>
                  <option value="3">Currency 3</option>
                  <option value="4">Currency 4</option>
                </select>
              </div>
          </form>
        </section>
      </div>
    </div>
  )
}
