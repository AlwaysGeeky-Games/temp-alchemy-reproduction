/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
interface Window {
  ethereum: any
  FreshworksWidget: any
}

type IconType = {
  className?: string
  color?: string
}

type ReactQueryRequest = {
  signal?: AbortSignal
}

type ReactQueryInfiniteFnArgs = { pageParam?: number } & ReactQueryRequest
