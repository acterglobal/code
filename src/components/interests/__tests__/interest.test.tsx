import React from 'react'
import { render, screen } from '@testing-library/react'
import Interest, { interestColors } from '../interest'
import {
  Tag,
  Approach,
  Economy,
  Environment,
  Social,
} from '../../../__fixtures__/interest/example-interests'

describe('[Interest]', () => {
  it('should render Tag interest with correct info and styles', () => {
    expect(Tag.type).toBe('Tags')
    render(<Interest {...Tag} />)
    expect(document.querySelector('.MuiChip-outlined')).toBeTruthy()
    expect(screen.getByText(Tag.interest.name)).toHaveTextContent(
      Tag.interest.name
    )
  })

  it('should render Approach interest with correct info and styles', () => {
    expect(Approach.type).toBe('Approach')
    render(<Interest {...Approach} />)
    expect(document.querySelector('.MuiChip-outlined')).toBeFalsy()
    expect(screen.getByText(Approach.interest.name)).toHaveTextContent(
      Approach.interest.name
    )
  })

  it('should render Economy interest with correct info and styles', () => {
    expect(Economy.type).toBe('Economy')
    const { getByText } = render(<Interest {...Economy} />)
    expect(document.querySelector('.MuiChip-outlined')).toBeFalsy()
    expect(getByText(Economy.interest.name).parentElement).toHaveStyle(
      `background-color:${interestColors[Economy.type]}`
    )
    expect(screen.getByText(Economy.interest.name)).toHaveTextContent(
      Economy.interest.name
    )
  })

  it('should render Environment interest with correct info and styles', () => {
    expect(Environment.type).toBe('Environment')
    const { getByText } = render(<Interest {...Environment} />)
    expect(document.querySelector('.MuiChip-outlined')).toBeFalsy()
    expect(getByText(Environment.interest.name).parentElement).toHaveStyle(
      `background-color:${interestColors[Environment.type]}`
    )
    expect(screen.getByText(Environment.interest.name)).toHaveTextContent(
      Environment.interest.name
    )
  })

  it('should render Social interest with correct info and styles', () => {
    expect(Social.type).toBe('Social')
    const { getByText } = render(<Interest {...Social} />)
    expect(document.querySelector('.MuiChip-outlined')).toBeFalsy()
    expect(getByText(Social.interest.name).parentElement).toHaveStyle(
      `background-color:${interestColors[Social.type]}`
    )
    expect(screen.getByText(Social.interest.name)).toHaveTextContent(
      Social.interest.name
    )
  })
})
