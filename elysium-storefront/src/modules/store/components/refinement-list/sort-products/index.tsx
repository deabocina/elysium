"use client"

export type SortOptions = "price_asc" | "price_desc" | "created_at"

type SortProductsProps = {
  sortBy: SortOptions
  setQueryParams: (name: string, value: SortOptions) => void
  "data-testid"?: string
}

export default function SortProducts({
  sortBy,
  setQueryParams,
  "data-testid": dataTestId,
}: SortProductsProps) {
  return (
    <div>
      <select
        data-testid={dataTestId}
        value={sortBy}
        onChange={(e) =>
          setQueryParams("sortBy", e.target.value as SortOptions)
        }
        className="bg-[#1a1a2f] text-white/90 px-3 py-2 rounded-lg border border-white/10 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
      >
        <option value="created_at">Latest Arrivals</option>
        <option value="price_asc">Price: Low → High</option>
        <option value="price_desc">Price: High → Low</option>
      </select>
    </div>
  )
}
