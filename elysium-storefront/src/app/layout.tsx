import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&family=Gruppo&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
          @import
          url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&family=Gruppo&display=swap');
        </style>
      </head>

      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
