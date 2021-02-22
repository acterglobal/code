import React from 'react'
import { render, screen } from '@testing-library/react'
import { Interest, interestColors } from '../interest'
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
    // TODO: need to use snapshot testing
    expect(
      screen.getByRole('listitem', { name: Tag.interest.name })
    ).toBeTruthy()
  })

  it('should render Approach interest with correct info and styles', () => {
    expect(Approach.type).toBe('Approach')
    render(<Interest {...Approach} />)
    expect(document.querySelector('.MuiChip-outlined')).toBeFalsy()
    expect(
      screen.getByRole('listitem', { name: Approach.interest.name })
    ).toBeTruthy()
  })

  it('should render Economy interest with correct info and styles', () => {
    expect(Economy.type).toBe('Economy')

    render(<Interest {...Economy} />)

    expect(document.querySelector('.MuiChip-outlined')).toBeFalsy()
    expect(
      screen.getByRole('listitem', { name: 'Transportation' })
    ).toBeTruthy()
    expect(
      screen.getByRole('listitem', { name: Economy.interest.name })
    ).toHaveStyle(`background-color:${interestColors[Economy.type]}`)
  })

  it('should render Environment interest with correct info and styles', () => {
    expect(Environment.type).toBe('Environment')

    render(<Interest {...Environment} />)

    expect(document.querySelector('.MuiChip-outlined')).toBeFalsy()
    expect(
      screen.getByRole('listitem', { name: Environment.interest.name })
    ).toHaveStyle(`background-color:${interestColors[Environment.type]}`)
    expect(
      screen.getByRole('listitem', { name: Environment.interest.name })
    ).toBeTruthy()
  })

  it('should render Social interest with correct info and styles', () => {
    expect(Social.type).toBe('Social')
    render(<Interest {...Social} />)

    expect(document.querySelector('.MuiChip-outlined')).toBeFalsy()

    expect(
      screen.getByRole('listitem', { name: Social.interest.name })
    ).toHaveStyle(`background-color:${interestColors[Social.type]}`)
    expect(
      screen.getByRole('listitem', { name: Social.interest.name })
    ).toBeTruthy()
  })
})
