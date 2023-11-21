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

      {/* Google */}
      <div className="flex items-center mt-6 -mx-2">
        <button type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                </path>
            </svg>

            <span className="hidden mx-2 sm:inline">Sign in with Google</span>
        </button>
      </div>
      <p className="mt-8 text-xs font-light text-center text-gray-500">
        Not yet Registered? <a href="#" className="font-medium text-gray-600 hover:underline">Create One</a>
      </p>
    </>
  )
}