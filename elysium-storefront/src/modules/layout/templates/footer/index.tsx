import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { icons } from "assets/assets"

export default async function Footer() {
  return (
    <footer className="bg-[#07061f] text-gray-300 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14">
        <div className="flex flex-col gap-4 mr-8">
          <h2 className="text-3xl font-semibold text-white">Elysium</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Play smarter. Game harder. <br />
            Discover new worlds — one click away.
          </p>

          <div className="flex items-center gap-6 mt-5">
            <img
              src={icons.discord.src}
              alt="Discord"
              className="w-6 h-6 opacity-80 hover:opacity-100 transition cursor-pointer"
            />
            <img
              src={icons.twitter.src}
              alt="Twitter"
              className="w-6 h-6 opacity-80 hover:opacity-100 transition cursor-pointer"
            />
            <img
              src={icons.instagram.src}
              alt="Instagram"
              className="w-6 h-6 opacity-80 hover:opacity-100 transition cursor-pointer"
            />
            <img
              src={icons.youtube.src}
              alt="YouTube"
              className="w-6 h-6 opacity-80 hover:opacity-100 transition cursor-pointer"
            />
          </div>

          <LocalizedClientLink
            href="#"
            className="border mx-right p-2 uppercase tracking-wider rounded-md mt-9 text-center transition duration-300 hover:-translate-y-2"
          >
            Back to top
          </LocalizedClientLink>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-white font-bold">Quick Links</span>

          <ul className="flex flex-col gap-2 ">
            <li>
              <LocalizedClientLink
                href="/"
                className="border-b-2 border-transparent hover:border-purple-700 transition"
              >
                Homepage
              </LocalizedClientLink>
            </li>
            <li>
              <LocalizedClientLink
                href="/store"
                className="border-b-2 border-transparent hover:border-purple-700 transition"
              >
                Store
              </LocalizedClientLink>
            </li>
            <li>
              <LocalizedClientLink
                href="#"
                className="border-b-2 border-transparent hover:border-purple-700 transition"
              >
                Deals
              </LocalizedClientLink>
            </li>
            <li>
              <LocalizedClientLink
                href="#"
                className="border-b-2 border-transparent hover:border-purple-700 transition"
              >
                Support
              </LocalizedClientLink>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-white font-bold">About</span>

          <ul className="flex flex-col gap-2 ">
            <li>
              <LocalizedClientLink
                href="#"
                className="border-b-2 border-transparent hover:border-purple-700 transition"
              >
                Our Team
              </LocalizedClientLink>
            </li>
            <li>
              <LocalizedClientLink
                href="#"
                className="border-b-2 border-transparent hover:border-purple-700 transition"
              >
                Careers
              </LocalizedClientLink>
            </li>
            <li>
              <LocalizedClientLink
                href="#"
                className="border-b-2 border-transparent hover:border-purple-700 transition"
              >
                Contact
              </LocalizedClientLink>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-white font-bold">Legal</span>

          <ul className="flex flex-col gap-2 ">
            <li>
              <LocalizedClientLink
                href="#"
                className="border-b-2 border-transparent hover:border-purple-700 transition"
              >
                Privacy Policy
              </LocalizedClientLink>
            </li>
            <li>
              <LocalizedClientLink
                href="#"
                className="border-b-2 border-transparent hover:border-purple-700 transition"
              >
                Terms of Service
              </LocalizedClientLink>
            </li>
            <li>
              <LocalizedClientLink
                href="#"
                className="border-b-2 border-transparent hover:border-purple-700 transition"
              >
                Cookies
              </LocalizedClientLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Elysium. All rights reserved.
      </div>
    </footer>
  )
}
