import * as S from './styles'

const Features = () => (
  <S.Wrapper role='warpper'    >
    <S.H2 data-aos="zoom-in" data-aos-duration="1000">Some of our features</S.H2 >
    <S.H2 data-aos="zoom-in" data-aos-duration="1000">that will help you</S.H2>
    <S.P data-aos="fade-right" data-aos-duration="1000">
      With cube, you can build your app or website faster than before. Featured with an awesome things inside that will help you in your design process
    </S.P>
    <div>
    <S.Itens role='itens'data-aos="zoom-in" data-aos-duration="1000" >
      <S.Item>
      <img src="item1.png" />
      <h3>Easy Communication</h3>
      <p>Easy and simple way to communicate with your team and friends, build with awesome features with it
      </p>
      </S.Item>
      <S.Item>
      <img src="item2.png" />
      <h3>Community Support</h3>
      <p>A creative and quick way to get feedbacks and support in your team or community, just send the work and the rest will follow</p>
      </S.Item>
      <S.Item>
      <img src="item3.png" />
      <h3>Discover Channel</h3>
      <p>Discover new channels you interest in, meet with new people around the world and make more connections</p>
      </S.Item>
    </S.Itens>
    </div>
  </S.Wrapper>
)

export default Features