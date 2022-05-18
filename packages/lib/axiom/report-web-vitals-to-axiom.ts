import { NextWebVitalsMetric } from 'next/app'

export const reportWebVitalsToAxiom = (metric: NextWebVitalsMetric): void => {
  const url = process.env.NEXT_PUBLIC_AXIOM_INGEST_ENDPOINT

  if (!url) {
    return
  }

  const body = JSON.stringify({
    route: window.__NEXT_DATA__.page,
    ...metric,
  })

  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body)
  } else {
    fetch(url, { body, method: 'POST', keepalive: true })
  }
}
