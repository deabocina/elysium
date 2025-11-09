import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/images/hero.png)` }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl font-bold uppercase drop-shadow-lg">
          Welcome to the next level
        </h1>
        <p className="mt-4 text-xl drop-shadow-md">
          The future of game shopping starts here
        </p>

        <LocalizedClientLink
          href="/store"
          className="mt-12 inline-block px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-lg uppercase transition"
        >
          Explore the Store
        </LocalizedClientLink>

        <span className="mt-4 text-sm">
          Instant delivery. Global access. No DRM.
        </span>
      </div>
      <div className="absolute inset-0 bg-black/40"></div>
    </section>
  )
}
