export default function HeroSection() {
  return (
    <section className="bg-base-200">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Track Your Money. <br />
            <span className="text-green-500">Control Your Future.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            CashFlow helps you track income and expenses, understand your
            spending habits, and take control of your finances — all in one
            simple dashboard.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="#feature" className="px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition">
              Get Started
            </a>
            <button className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition">
              View Demo
            </button>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            ✔ Secure &nbsp; ✔ Simple &nbsp; ✔ Smart Finance Tracking
          </p>
        </div>

        {/* Right Visual */}
        <div className="hidden md:flex justify-center">
          <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
            <p className="text-sm text-gray-500 mb-2">Monthly Overview</p>
            <div className="h-40 bg-green-100 rounded-lg flex items-center justify-center text-green-600 font-semibold">
              Chart / Dashboard Preview
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
