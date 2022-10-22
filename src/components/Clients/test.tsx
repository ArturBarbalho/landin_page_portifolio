import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import Clients from '.'

describe('<Clients />', () => {
  it('should render the heading', () => {
    render(<Clients />)

    expect(screen.getByRole('wrapper')).toBeInTheDocument()
    expect(screen.getByRole('paragraph')).toBeInTheDocument()
    expect(screen.getByRole('imgcont')).toBeInTheDocument()

   
  })
})