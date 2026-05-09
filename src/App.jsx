import { useState } from "react"

export default function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      <header className="sticky top-0 z-50 bg-white border-b shadow-sm backdrop-blur-lg">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Royal Hardware
            </h1>

            <p className="text-sm text-gray-500">
              Nagavara, Bengaluru
            </p>
          </div>

          <div className="block md:hidden text-3xl">

            <a href="#products" className="hover:text-black transition">
              Products
            </a>

            <a href="#brands" className="hover:text-black transition">
              Brands
            </a>

            <a href="#gallery" className="hover:text-black transition">
              Gallery
            </a>

            <a href="#contact" className="hover:text-black transition">
              Contact
            </a>

          </div>

          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

      </header>

      {
        menuOpen && (

          <div className="md:hidden bg-white shadow-lg border-b px-6 py-6 space-y-4 text-lg font-medium">

            <a
              href="#products"
              className="block"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </a>

            <a
              href="#brands"
              className="block"
              onClick={() => setMenuOpen(false)}
            >
              Brands
            </a>

            <a
              href="#gallery"
              className="block"
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </a>

            <a
              href="#contact"
              className="block"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>

          </div>

        )
      }

      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white animate-fadeIn">

        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm mb-6 border border-white/20">
              Trusted Hardware Store in Nagavara
            </div>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Complete Hardware & Interior Solutions
            </h2>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Premium plywood, laminates, paints, fittings, tools and modular hardware products for homes, offices and interior projects.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="tel:+919876543210"
                className="bg-white text-black px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-110 active:scale-95 transition duration-300"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                className="border border-white/30 px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-black hover:scale-110 active:scale-95 transition duration-300"
              >
                WhatsApp Enquiry
              </a>

            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">

              <div>
                <h3 className="text-3xl font-bold">500+</h3>
                <p className="text-gray-400 text-sm mt-1">
                  Products Available
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">10+</h3>
                <p className="text-gray-400 text-sm mt-1">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">1000+</h3>
                <p className="text-gray-400 text-sm mt-1">
                  Happy Customers
                </p>
              </div>

            </div>

          </div>

          <div className="relative">

            <div className="rounded-[32px] overflow-hidden shadow-2xl border border-white/10 hover:scale-105 transition duration-500">

              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAH1Lk1l5OkbSErZMhoLbJfP_DVYFafbTSIaQlwiFpTO_KSAJRwuDHJY7bnDCsD4kRcC1aRHQ-eazBjRDFxlPshy1iiWgp2A8rR-6-tCNflKTY7yfTH1N_ZL0jt42cTfJOryWDtH=w1200-h800"
                alt="Hardware Store"
                className="w-full h-[500px] object-cover"
              />

            </div>

            <div className="absolute -bottom-8 -left-8 bg-white text-black p-6 rounded-3xl shadow-2xl w-72 hover:scale-105 transition duration-500">

              <p className="font-bold text-xl">
                Interior & Construction Supplies
              </p>

              <p className="text-gray-600 mt-2 text-sm">
                Quality materials for homes, offices and commercial projects.
              </p>

            </div>

          </div>

        </div>

      </section>

      <section id="products" className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-4xl font-bold">
            Our Products
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            We provide premium-quality hardware and interior materials for residential and commercial projects.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          <div className="bg-white rounded-[28px] overflow-hidden border shadow-sm hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition duration-500">

            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-60 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold">
                Plywood & Laminates
              </h3>

              <p className="text-gray-600 mt-3">
                High-quality products with reliable durability and premium finish.
              </p>
            </div>

          </div>

          <div className="bg-white rounded-[28px] overflow-hidden border shadow-sm hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition duration-500">

            <img
              src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1200&auto=format&fit=crop"
              className="w-full h-60 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold">
                Paints & Wall Finishes
              </h3>

              <p className="text-gray-600 mt-3">
                High-quality products with reliable durability and premium finish.
              </p>
            </div>

          </div>

          <div className="bg-white rounded-[28px] overflow-hidden border shadow-sm hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition duration-500">

            <img
              src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAG5JpoigPAE3puHQTt1ni8M8lBqhjBpYPR68KcpAh8jW_DaTFPGZabyk9NCs1krftW0eYb_aHLINrN2OuCZClQjzUpbAGt42Ud6FluRa-FLE5KYv-h6LEkFenpheEw3gY-CZ73A=w1200-h800"
              className="w-full h-60 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold">
                Electrical & Plumbing Tools
              </h3>

              <p className="text-gray-600 mt-3">
                High-quality products with reliable durability and premium finish.
              </p>
            </div>

          </div>

        </div>

      </section>

      <section id="brands" className="bg-gray-50 py-24 px-6">

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-bold">
            Top Brands Available
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Trusted brands for professional construction and interior projects.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

            <div className="bg-white rounded-3xl p-8 shadow-sm border text-xl font-semibold hover:scale-110 hover:shadow-2xl transition duration-500">
              Asian Paints
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border text-xl font-semibold hover:scale-110 hover:shadow-2xl transition duration-500">
              CenturyPly
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border text-xl font-semibold hover:scale-110 hover:shadow-2xl transition duration-500">
              Greenply
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border text-xl font-semibold hover:scale-110 hover:shadow-2xl transition duration-500">
              Hettich
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border text-xl font-semibold hover:scale-110 hover:shadow-2xl transition duration-500">
              Fevicol
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border text-xl font-semibold hover:scale-110 hover:shadow-2xl transition duration-500">
              Kajaria
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border text-xl font-semibold hover:scale-110 hover:shadow-2xl transition duration-500">
              Anchor
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border text-xl font-semibold hover:scale-110 hover:shadow-2xl transition duration-500">
              Havells
            </div>

          </div>

        </div>

      </section>

      <section id="gallery" className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Project Gallery
          </h2>

          <p className="text-gray-600 mt-3 text-lg">
            Materials supplied for homes, offices and interior projects across Bengaluru.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAH1Lk1l5OkbSErZMhoLbJfP_DVYFafbTSIaQlwiFpTO_KSAJRwuDHJY7bnDCsD4kRcC1aRHQ-eazBjRDFxlPshy1iiWgp2A8rR-6-tCNflKTY7yfTH1N_ZL0jt42cTfJOryWDtH=w1200-h800"
            className="rounded-[28px] h-80 w-full object-cover hover:scale-105 transition duration-500"
          />

          <img
            src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAG5JpoigPAE3puHQTt1ni8M8lBqhjBpYPR68KcpAh8jW_DaTFPGZabyk9NCs1krftW0eYb_aHLINrN2OuCZClQjzUpbAGt42Ud6FluRa-FLE5KYv-h6LEkFenpheEw3gY-CZ73A=w1200-h800"
            className="rounded-[28px] h-80 w-full object-cover hover:scale-105 transition duration-500"
          />

          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"
            className="rounded-[28px] h-80 w-full object-cover hover:scale-105 transition duration-500"
          />

        </div>

      </section>

      <footer id="contact" className="bg-gray-100 py-24 px-6">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-5xl font-bold text-center text-black">
            Contact Us
          </h2>

          <p className="text-center text-gray-600 mt-4">
            Send us your enquiry and we will contact you shortly.
          </p>

          <form
            action="https://formsubmit.co/ruthikabadrinath@gmail.com"
            method="POST"
            className="mt-12 space-y-6 bg-white p-10 rounded-3xl shadow-xl"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-2xl p-4 text-black"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-2xl p-4 text-black"
            />

            <textarea
              placeholder="Tell us your requirement"
              rows="5"
              className="w-full border border-gray-300 rounded-2xl p-4 text-black"
            ></textarea>

            <button
              type="submit"
              className="bg-black text-white w-full py-4 rounded-2xl font-semibold hover:opacity-90 hover:scale-105 transition duration-300"
            >
              Send Enquiry
            </button>

          </form>

        </div>

      </footer>

      <a
        href="https://wa.me/919876543210"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl font-semibold hover:scale-110 active:scale-95 transition duration-300"
      >
        WhatsApp
      </a>

    </div>
  )
}