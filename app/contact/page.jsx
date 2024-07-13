import React from 'react'

const Contact = () => {
  return (
    <main>
        <h2 class="flex justify-center text-4xl font-bold mb-4 text-violet-500 pt-10">Contact Us</h2>
        <div className='w-1/2'>

        </div>
        <div class="flex w-1/2 mx-auto py-10">
            <form class="w-full max-w-lg">
                <div class="flex items-center mb-4">
                    <label for="name" class="w-1/4">Name:</label>
                    <input type="text" id="name" class="border rounded px-2 py-1 w-3/4"/>
                </div>
                <div class="flex items-center mb-4">
                    <label for="email" class="w-1/4">Email:</label>
                    <input type="email" id="email" class="border rounded px-2 py-1 w-3/4"/>
                </div>
                <div class="flex items-center mb-4">
                    <label for="message" class="w-1/4">Message:</label>
                    <textarea id="message" class="border rounded px-2 py-1 w-3/4" rows="4"></textarea>
                </div>
                <button class="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded ml-96 my-4">Submit</button>
            </form>
        </div>
    </main>
  )
}

export default Contact
