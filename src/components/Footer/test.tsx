import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import Footer from '.'

describe('<Footer />', () => {
  it('should have the right style on footer ', () => {
    render(<Footer />)

    expect(screen.getByRole('line')).toBeInTheDocument()
    expect(screen.getByRole('dive')).toHaveStyle(
{     'max-width': '1000px',
      'margin': 'auto',
      'display': 'flex',
      'justify-content': 'space-between',}
    )
    expect(screen.getByRole('bottom')).toBeInTheDocument()
  })
})