'use client'

export default function LoginForm() {
  return (
    <>
      <form className="mt-6">
        {/* Username */}
        <div>
          <label htmlFor='username' className='block text-sm text-gray-800'>Username</label>
          <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg focus:border-red-400 dark:focus:border-red-300 border-gray-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        
        {/* Password */}
        <div className="mt-4">
            <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm text-gray-800">Password</label>
                <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">Forget Password?</a>
            </div>

            <input type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg border-gray-400 focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <div className="mt-6">
              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                  Sign In
              </button>
          </div>
      </form>

      <div className="flex items-center justify-between my-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <a href="#" className="text-xs text-center text-gray-500 uppercase">
              or login with Social Media
          </a>

          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>
      </div>
    </>
  )
}