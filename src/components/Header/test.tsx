import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import Header from '.'

describe('<Header />', () => {
  it('should render tittles, image, paragraph and button', () => {
    render(<Header />)

    expect(screen.queryByRole('h1-1' )).toBeInTheDocument()
    expect(screen.queryByRole('h1-2' )).toBeInTheDocument()
    expect(screen.getByRole('button' )).toBeInTheDocument()
    expect(screen.getByRole('imgbt' )).toBeInTheDocument()
    expect(screen.getByRole('a' )).toBeInTheDocument()
    expect(screen.getByRole('img' )).toHaveStyleRule(
      'width',
      '90%'
    )
    expect(screen.getByTestId('imgdiv' )).toHaveStyleRule(
      'height',
      '400px',
      {media: '(max-width: 1170px)'}
    )
    expect(screen.getByTestId('imgdiv' )).toHaveStyleRule(
      'height',
      '300px',
      {media: '(max-width: 768px)'} 
    )
    expect(screen.getByTestId('imgdiv' )).toHaveStyleRule(
      'height',
      '200px', 
      {media: '(max-width: 450px)'}
    )
    
    
    
  })
})