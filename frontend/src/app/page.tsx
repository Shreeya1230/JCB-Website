import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">

        {/* HERO SECTION */}
        <section className="min-h-screen bg-white flex items-center">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

            <div>
              <p className="text-[#D4A017] font-semibold uppercase">
                Heavy Equipment Solutions
              </p>

              <h1 className="mt-4 text-5xl md:text-7xl font-bold text-[#1F2937]">
                Purva
              </h1>

              <p className="mt-6 text-lg text-gray-600">
                Premium excavators, loaders, cranes and industrial equipment.
              </p>

              <div className="mt-8 flex gap-4">
                <button className="bg-[#D4A017] text-white px-7 py-3 rounded-xl">
                  Explore Machines
                </button>

                <button className="border-2 border-[#1F2937] px-7 py-3 rounded-xl">
                  Contact Us
                </button>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
                alt="Construction Equipment"
                className="rounded-3xl shadow-2xl h-[550px] w-full object-cover"
              />
            </div>

          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">About Us</h2>

            <p className="text-gray-600 max-w-3xl mx-auto">
              Purva provides reliable heavy equipment solutions for
              construction, mining and infrastructure projects.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our Services
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 shadow-lg rounded-2xl">
                <h3 className="font-bold text-xl mb-4">
                  Excavator Rental
                </h3>
                <p>Flexible rental plans for all project sizes.</p>
              </div>

              <div className="p-8 shadow-lg rounded-2xl">
                <h3 className="font-bold text-xl mb-4">
                  Crane Services
                </h3>
                <p>Heavy lifting solutions with expert operators.</p>
              </div>

              <div className="p-8 shadow-lg rounded-2xl">
                <h3 className="font-bold text-xl mb-4">
                  Site Support
                </h3>
                <p>End-to-end equipment support and maintenance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED EQUIPMENT */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              Featured Equipment
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-bold">JCB 3DX</h3>
                <p>Powerful backhoe loader.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-bold">Hydraulic Crane</h3>
                <p>Heavy-duty lifting equipment.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-bold">Excavator</h3>
                <p>Ideal for digging and demolition.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="py-24 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>

          <button className="bg-[#D4A017] text-white px-8 py-4 rounded-xl">
            Contact Us Today
          </button>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#1F2937] text-white py-10 text-center">
          © 2026 Purva Equipment Solutions. All Rights Reserved.
        </footer>

      </main>
    </>
  );
}
