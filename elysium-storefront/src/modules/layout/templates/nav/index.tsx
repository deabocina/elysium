import { Suspense } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"

export default async function Nav() {
  return (
    <div className="sticky top-0 inset-x-0 z-50 group bg-[#07061f] text-white">
      <header className="relative h-20 mx-10">
        <nav className="flex items-center w-full h-full text-sm">
          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="text-lg md:text-2xl font-bold"
            >
              Elysium
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 justify-evenly">
            <LocalizedClientLink
              href="/store"
              className="border-b-2 border-transparent hover:border-purple-700 transition-colors duration-200"
            >
              Store
            </LocalizedClientLink>

            <LocalizedClientLink
              href="/account"
              className="border-b-2 border-transparent hover:border-purple-700  transition-colors duration-200"
            >
              Account
            </LocalizedClientLink>

            <Suspense
              fallback={
                <LocalizedClientLink
                  href="/cart"
                  className="border-b-2 border-transparent hover:border-purple-700 transition-colors duration-200"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
