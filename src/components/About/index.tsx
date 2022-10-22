import * as S from './styles'
import Cta from '../Cta'
const About = () => (
  <>
   <S.Wrapper role='cont'>
    <S.Img role='image' src='aboutimg.png' data-aos="fade-right" data-aos-duration="1000" />
    <S.Card role='card' data-aos="fade-left" data-aos-duration="1000" >
      <h2>Easy and </h2>
      <h2>effortless way </h2>
      <h2>to connect with </h2>
      <h2>your team</h2>
      <p>With hush you can easliy connect with your team in a different fields, you can create, manage, and edit what ever you want inside the channel. Create as many as you want</p>
      <S.Button>Lear more about Hush</S.Button>
    </S.Card>
  </S.Wrapper> 

  <S.Wrapper >
    <S.Card data-aos="fade-right" data-aos-duration="1000">
      <h2>Tons of </h2>
      <h2>supportive </h2>
      <h2>community you </h2>
      <h2>can discover</h2>
      <p>Search any type and field of community you want, by searching on the search page you can discover tons of supportive community that will help you with your work.</p>
      <S.Button>Explore the communities</S.Button>
    </S.Card>
   <S.Img src='aboutimg2.png' data-aos="fade-left" data-aos-duration="1000" />  
  </S.Wrapper>
  <Cta  />
  </>
)

export default About