import * as S from './styles'
const Header = () => (
  <S.Wrapper>
    <S.Container>
      <S.Tittle role='h1-1' data-aos="zoom-in" data-aos-duration="1000" >Connect with</S.Tittle  >
      <S.Tittle role='h1-2' data-aos="zoom-in" data-aos-duration="1000" >your team</S.Tittle>
      <S.Paragrafo role='a' data-aos="zoom-in" data-aos-duration="1000" >
        Hush is a messaging app for your team that will helps you to connect with everyone in a easy and comfortable way posssible
      </S.Paragrafo>
    </S.Container>
    <S.ButtonCont data-aos="zoom-in" data-aos-duration="1000" >
      <S.ButtonImg role='imgbt' src='headingButton.png' />
      <S.Button role='button' >Download</S.Button>
    </S.ButtonCont>
    <S.ImgDiv data-testid='imgdiv'>
    <S.HeaderImg role='img' src='headerImg.png' data-aos="flip-left" data-aos-duration="1000" />
    </S.ImgDiv>
  </S.Wrapper>
)

export default Header