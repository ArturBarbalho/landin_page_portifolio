import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import Cta from '.'

describe('<Cta />', () => {
  it('should render a Cta div', () => {
    render(<Cta />)

    expect(screen.getByRole('divbehind')).toHaveStyleRule(
      'height',
      '500px',
      {media:'(max-width:768px)'}

    )
    
    expect(screen.getByRole('divbehind')).toHaveStyle(
     { 
      'background-color':'black',
      'width':'100%',
      'height':'300px'
     }
    )
    expect(screen.getByRole('ctadiv')).toHaveStyle(
     { 
      'position':'absolute',
     }
    )
  })
})