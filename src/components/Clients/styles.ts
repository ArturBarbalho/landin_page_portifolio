import styled from 'styled-components'
import media from 'styled-media-query'
export const Wrapper = styled.main`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 320px;
margin-bottom: 50px;

${media.lessThan("medium")`
  margin-top: 200px;  
`}
@media(max-width:600px){
margin-top:100px;
}
`
export const Paragraph = styled.p`
font-size:larger;
color: lightgray;
`
export const ImgCont = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
width: 500px;
margin-top: 10px;
${media.lessThan("small")`
    width:300px;
`}
img{margin-top:10px;}
`