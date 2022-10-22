import { fireEvent, render, screen } from '@testing-library/react';
import 'jest-styled-components'
import Nav from '.'
describe('<Nav />', () => {
 
  it('should show the menu when screen become medium and open the menuItens when click in menu', () => {
    render(<Nav/>)
    const links=screen.queryByTestId('links')
    const menu = screen.queryByTestId('menu')
    const menuItens = screen.queryByTestId('menuItens')
    const button = screen.queryByTestId('button')
    expect(menu).toHaveStyleRule(
      'display',
      'inline-block',
      {media: '(max-width: 768px)'}
    )
    expect(links).toHaveStyle(
      'display:block;'  
    )
    expect(button).toHaveStyleRule(
      'display',
      'none',
      {media:'(max-width:450px)'}
    )
    if(menu) fireEvent.click(menu)
    expect(menuItens).toHaveStyleRule(
      'display',
      'flex'
    )
    
    
  })
})

/*
{
  huge: '1440px',
  large: '1170px',
  medium: '768px',
  small: '450px',
}
*/