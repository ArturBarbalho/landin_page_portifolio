import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import About from '.'

describe('<About />', () => {
  it('should render the grid items', () => {
    render(<About />)

    expect(screen.getByRole('cont')).toHaveStyleRule(
      'flex-direction',
      'column',
      {media:'(max-width:1170px)'}
    )
    expect(screen.getByRole('image')).toBeInTheDocument()
    expect(screen.getByRole('card')).toBeInTheDocument()
  })
})