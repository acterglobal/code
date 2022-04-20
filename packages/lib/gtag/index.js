/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const pageview = (url) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', `${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TAG}`, {
      page_path: url,
    })
  }
}

export const event = ({ action, category, label, value }) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}
