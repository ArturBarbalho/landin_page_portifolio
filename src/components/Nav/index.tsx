import { useState } from 'react'
import * as S from './styles'

const Nav = ()=>   {
  const [showMenu,setShowMenu] =useState(false)
   
  return(
    <>
  <S.Wrapper   > 
    <img src="hush.png" data-aos="zoom-in" data-aos-duration="1000" />
    <div data-testid='links' className='links' data-aos="zoom-in" data-aos-duration="1000" >
      <S.Link href="#">Products</S.Link >
      <S.Link  href="#">Pricing</S.Link >
      <S.Link  href="#">Patch Release</S.Link >
    </div>
    <div style={{display:'flex'}} data-aos="zoom-in" data-aos-duration="1000" >
    <S.Button data-testid='button'>Create Account</S.Button>
    <S.Menu data-testid='menu' src='menu.svg' onClick={()=>{setShowMenu(!showMenu)}} />
    </div>
  </S.Wrapper>
  <S.MenuItens data-testid='menuItens' show={showMenu} >
   <S.Link hasBorder={true} href="#">Products</S.Link >
  <S.Link hasBorder={true} href="#">Pricing</S.Link >
  <S.Link hasBorder={true} href="#">Patch Release</S.Link >
  <S.Link hasBorder={true} href="#">Create Account</S.Link >
</S.MenuItens>

</>  
)
}

export default Nav
