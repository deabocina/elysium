import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="bg-[#070b33] text-gray-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-white">Elysium</h2>
          <p className="text-sm md:text-base">
            Play smarter. Game harder.
            <br />
            Discover new worlds — one click away.
          </p>
          Discord, Twitter, Instagram, Youtube
        </div>

        {productCategories?.length > 0 && (
          <div className="flex flex-col gap-3">
            <span className="font-semibold text-pink-500">Categories</span>
            <ul className="flex flex-col gap-1">
              {productCategories.slice(0, 6).map((c) => {
                if (c.parent_category) return null
                const children =
                  c.category_children?.map((child) => ({
                    name: child.name,
                    handle: child.handle,
                    id: child.id,
                  })) || []

                return (
                  <li key={c.id}>
                    <LocalizedClientLink
                      href={`/categories/${c.handle}`}
                      className="border-b-2 border-transparent hover:border-pink-500 transition-colors duration-200 font-medium"
                    >
                      {c.name}
                    </LocalizedClientLink>
                    {children.length > 0 && (
                      <ul className="ml-4 flex flex-col gap-1">
                        {children.map((child) => (
                          <li key={child.id}>
                            <LocalizedClientLink
                              href={`/categories/${child.handle}`}
                              className="border-b-2 border-transparent hover:border-pink-500 transition-colors duration-200 text-sm"
                            >
                              {child.name}
                            </LocalizedClientLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        )}

        {collections?.length > 0 && (
          <div className="flex flex-col gap-3">
            <span className="text-pink-500 font-semibold">Collections</span>
            <ul className="flex flex-col gap-1">
              {collections.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <LocalizedClientLink
                    href={`/collections/${c.handle}`}
                    className="border-b-2 border-transparent hover:border-pink-500 transition-colors duration-200 font-medium"
                  >
                    {c.title}
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col gap-3">
          <span className="text-pink-500 font-semibold">Quick Links</span>
          <ul className="flex flex-col gap-1 mb-4">
            <li>
              <LocalizedClientLink
                href="/store"
                className="border-b-2 border-transparent hover:border-pink-500 transition-colors duration-200"
              >
                Store
              </LocalizedClientLink>
            </li>
            <li>
              <LocalizedClientLink
                href="#"
                className="border-b-2 border-transparent hover:border-pink-500 transition-colors duration-200"
              >
                Deals
              </LocalizedClientLink>
            </li>
            <li>
              <LocalizedClientLink
                href="#"
                className="border-b-2 border-transparent hover:border-pink-500 transition-colors duration-200"
              >
                Support
              </LocalizedClientLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t-2 border-pink-500 pt-6 text-center text-white text-sm">
        <p>© {new Date().getFullYear()} Elysium. All rights reserved.</p>
      </div>
    </footer>
  )
}
