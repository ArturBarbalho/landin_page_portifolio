import styled from 'styled-components'
import media from 'styled-media-query'
export const Wrapper = styled.main`
width: 100%;
margin-bottom: 30px;
margin-top: 200px;

.div{
    max-width: 1000px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    ${media.lessThan('medium')`
        flex-direction:column;
        align-items:center;
    `}

}
`
export const Item = styled.div`
    display: flex;
    flex-direction: column;
p{
    max-width:350px;
    color: darkgray;
    margin-top: 30px;
}
img{width:100px;}
a{
    text-decoration: none;
    color: darkgray;
    margin-bottom: 30px;
    text-align:center;
}
h4{
    font-size: 20px;
    margin-top: 0;
    margin-bottom:40px ;
    text-align: center;
}

${media.lessThan('medium')`
    Img{margin:auto;}
    p{text-align:center}
    h4{margin-top:50px;}
`}
`
export const Bottom = styled.div`
    display: flex;
    color: darkgray;
    justify-content: space-between;
    max-width: 1000px;
    margin: auto;
    margin-top: 50px;
    p{text-align:center;}
    ${media.lessThan('small')`
    flex-direction:column;
    align-items:center;
`}
`
export const Links = styled.div`
display: flex;
align-items: center;
color: darkgray;
justify-content: space-between;
width: 300px;

a{
    text-decoration:none;
    color: darkgray;
}

`
export const Line = styled.div`
width: 100%;
height: 1px;
background-color: darkgray;
margin-bottom: 80px;
`