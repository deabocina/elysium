import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function Hero() {
  return (
    <section className="relative w-full h-screen -mb-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/images/hero.png)` }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-7xl mx-20 font-hero font-bold uppercase text-white">
          Welcome to the{" "}
          <span className="border-b-2 border-purple-700">next level</span>
        </h1>

        <p className="mt-14 text-2xl font-hero tracking-wider uppercase">
          The future of game shopping starts here
        </p>

        <LocalizedClientLink
          href="/store"
          className="mt-24 inline-block px-6 py-3 border-2 border-purple-700 hover:bg-purple-700 font-bold rounded-lg uppercase transition duration-800 transform hover:scale-105 animate-bounce"
        >
          Explore the Store
        </LocalizedClientLink>

        <span className="mt-4 text-sm text-gray-500">
          Instant delivery. Global access. No DRM.
        </span>
      </div>
      <div className="absolute inset-0 bg-black/50"></div>
    </section>
  )
}
