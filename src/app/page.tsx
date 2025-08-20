export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-indigo-100">
      <main className="bg-white p-6 rounded-lg shadow-md w-96">

        
        <p className="flex justify-between items-center mb-4">
          <span>
            <p className="text-sm text-gray-500">Mar, 18 Feb 2025</p>
            <p className="text-lg font-semibold">Lista Tailwind</p>
          </span>
          <span className="text-sm text-gray-400">9:31:25 p.m.</span>
        </p>

        <p className="grid grid-cols-7 gap-2 text-center text-gray-500 mb-1">
          <span>s</span><span>m</span><span>t</span><span>w</span>
          <span>t</span><span>f</span><span>s</span>
        </p>
        <p className="grid grid-cols-7 gap-2 text-center text-gray-700 mb-4">
          <span>24</span><span>25</span><span>26</span><span>27</span>
          <span>28</span><span>29</span><span>30</span>
        </p>

        <p className="space-y-3">

          <span className="flex items-center justify-between p-2 rounded-md bg-indigo-50">
            <span className="flex items-center gap-2">
              <span className="flex justify-center items-center w-6 h-6 rounded-full bg-green-500 text-white text-xs">✔</span>
              <p className="text-gray-700 line-through">line-through</p>
            </span>
            <span className="text-sm text-indigo-600">9:00 AM</span>
          </span>

          <span className="flex items-center justify-between p-2 rounded-md bg-indigo-50">
            <span className="flex items-center gap-2">
              <span className="flex justify-center items-center w-6 h-6 rounded-full bg-green-500 text-white text-xs">✔</span>
              <p className="text-gray-700 line-through">do homework</p>
            </span>
            <span className="text-sm text-indigo-600">12:00 PM</span>
          </span>

          <span className="flex items-center justify-between p-2 rounded-md bg-indigo-50">
            <span className="flex items-center gap-2">
              <span className="flex justify-center items-center w-6 h-6 rounded-full bg-gray-300"></span>
              <p className="text-gray-700">go to grocery store</p>
            </span>
            <span className="text-sm text-indigo-600">1:00 PM</span>
          </span>

          <span className="flex items-center justify-between p-2 rounded-md bg-indigo-50">
            <span className="flex items-center gap-2">
              <span className="flex justify-center items-center w-6 h-6 rounded-full bg-gray-300"></span>
              <p className="text-gray-700">run 5 kilometers</p>
            </span>
            <span className="text-sm text-indigo-600">4:20 PM</span>
          </span>

          <span className="flex items-center justify-between p-2 rounded-md bg-indigo-50">
            <span className="flex items-center gap-2">
              <span className="flex justify-center items-center w-6 h-6 rounded-full bg-gray-300"></span>
              <p className="text-gray-700">load the dishwasher</p>
            </span>
            <span className="text-sm text-indigo-600">9:00 PM</span>
          </span>

          <span className="flex items-center justify-between p-2 rounded-md bg-indigo-50">
            <span className="flex items-center gap-2">
              <span className="flex justify-center items-center w-6 h-6 rounded-full bg-gray-300"></span>
              <p className="text-gray-700">take out the trash</p>
            </span>
            <span className="text-sm text-indigo-600">9:00 AM</span>
          </span>

        </p>
      </main>
    </div>
  );
}
