import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import Features from '.'

describe('<Features />', () => {
  it('should render the heading', () => {
    render(<Features />)

    expect(screen.getByRole('warpper')).toBeInTheDocument()
    expect(screen.getByRole('itens')).toHaveStyleRule(
      'flex-direction',
      'column',
      {media:'(max-width:1100px)'}
    )
    expect(screen.getByRole('itens')).toHaveStyleRule(
      'max-width',
      '1500px',
    )

    
  })
})