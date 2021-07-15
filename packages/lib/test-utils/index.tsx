import React, { FC, ReactElement } from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { ActerThemeProvider } from '@acter/components/themes/acter-theme'

const AllTheProviders: FC = ({ children }) => {
  return <ActerThemeProvider>{children}</ActerThemeProvider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
