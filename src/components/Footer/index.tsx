import * as S from './styles'
//hush.png
const Footer = () => (
  <S.Wrapper data-aos="fade-down" data-aos-duration="1000" >
    <S.Line role='line' />
   <div className='div' role='dive'>
    <S.Item >
    <img src="hushBlack.png" />
    <p>A team messaging app for everyone to connect with their team.</p>
    </S.Item>
    <S.Item>
    <h4>Product</h4>
    <a href="#">Updates</a>
    <a href="#">Downloads</a>
    <a href="#">Beta test</a>
    <a href="#">Pricing product</a>
    </S.Item>
    <S.Item>
    <h4>Support</h4>
    <a href="#">Help center</a>
    <a href="#">Account information</a>
    <a href="#">About</a>
    <a href="#">Contact us</a>
    </S.Item>
    <S.Item>
    <h4>Help and Solutions</h4>
    <a href="#">Talk to support</a>
    <a href="#">Suport docs</a>
    <a href="#">Systen status</a>
    <a href="#">Covid response</a>
    </S.Item>
   </div>

   <S.Bottom role='bottom'>
    <p>© 2021 Hush Inc. Copyright and All rights reserved.</p>
    <S.Links>
      <a href="#">Terms and Conditions </a>
      <span>•</span>
      <a href="#"> Privacy Policy</a>
    </S.Links>
   </S.Bottom>


  </S.Wrapper>
)

export default Footer