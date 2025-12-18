import Image from "next/image";

export default function Home() {
  return (
    <section className="-white lg:grid lg:h-screen lg:place-content-center">
      <div className="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="">Where Luxury Rises with the Mountains</h1>

          <p className="mt-4 text-pretty">
            Nestled in the heart of Murree, Address Fountain blends timeless
            elegance with natural beauty — offering a serene escape where every
            moment feels exceptional.
          </p>

          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <a
              className="inline-block rounded border border-indigo-600 -indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:-indigo-700"
              href="#"
            >
              Get Started
            </a>

            <a
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:-gray-50 hover:text-gray-900"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
