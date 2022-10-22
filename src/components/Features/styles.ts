import styled from 'styled-components'
import media from 'styled-media-query'
export const Wrapper = styled.main`
padding-top: 90px;
margin-bottom: 50px;
`
export const H2 = styled.h2`
font-size: 60px;
margin: 0;
text-align: center;
${media.lessThan('small')`
font-size:40px;
`}
`
export const P = styled.p`
max-width: 700px;
color:darkgrey;
margin: auto;
margin-top: 30px;
width: 100%;
padding-left: 10px;
`
export const Itens = styled.div`
display: flex;
margin: auto;
margin-top: 70px;
justify-content: space-between;
max-width: 1500px;
@media(max-width:1100px){
   flex-direction:column;
   }
`
export const Item = styled.div`
width:100%;
padding-left: 10px;
@media(min-width:1100px){
   max-width: 400px;
   }
h3{
    font-size:20px;
    margin-top: 20px;
}
p{
    margin-top: 30px;
    margin-bottom: 30px;
    color: darkgray;
}

`