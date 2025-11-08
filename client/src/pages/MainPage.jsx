import React, { useState } from 'react'
const [date, setDate]= useState(null);
const [sourceCurrency, setSourceCurrency] = useState("");
const [targetCurrency, setTargetCurrency] = useState("");
const [amountInTargetCurrency, setAmoutInTargetCurrency] = useState(0);
const [amountInSourceCurrency, setAmoutInSourceCurrency] = useState(0);
export default function MainPage() {
  return (
    <div>
      <h1 className='lg:mx-32 text-5xl font-bold text-green-500'>Convert Your Currencies Today</h1>
      <p class="lg:mx-32 opacity-40 py-6">Welcome to "Convert Your Currencies Today"! This application allows you to easily convert currencies based on the latest exchange rates. Whetheryou're planning a trip, managing your finances, or simply curious about the value of your money in different currencies, this tool is here to help.</p>

      <div className='mt-5 flex flex-col items-center justify-center'>
        <section className='lg:w-1/2 w-full'>
          <form>
              <div class="mb-4">
                <label htmlFor={date} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                <input type="date" id={date} name={date} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 outline-0" required />
              </div>
              <div class="mb-4">
                <label htmlFor={sourceCurrency} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Surce Currency</label>
                <select id={sourceCurrency} name={sourceCurrency} value={sourceCurrency} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 outline-0">
                  <option>Select Source Currency</option>
                  <option></option>
                  <option></option>
                  <option></option>
                </select>
              </div>
              <div class="mb-4">
                <label htmlFor={targetCurrency} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Currency</label>
                <select id={targetCurrency} name={targetCurrency} value={targetCurrency} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 outline-0">
                  <option>Select Target Currency</option>
                  <option></option>
                  <option></option>
                  <option></option>
                </select>
              </div>
              <div class="mb-4">
                <label htmlFor={amountInSourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount in Source Currency</label>
                <input type="text" id={amountInSourceCurrency} name={amountInSourceCurrency} placeholder='Amount in Source Currency' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 outline-0" required />
              </div>
              <button type="button" class="focus:outline-none text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Get the target currency</button>

          </form>
        </section>
      </div>
    </div>
  )
}
