import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
background-color: black;
`

export const Container = styled.div`
margin: auto;
max-width: 1000px;
padding-top:100px;
`

export const Tittle = styled.h1`
color: white;
font-size: 100px;
text-align: center;
margin: 0;
${media.lessThan("medium")`
    font-size:60px;
`}
`
export const Paragrafo = styled.p`
color: gray;
text-align: center;
max-width: 500px;
margin: auto;
font-size: larger;
margin-top: 50px;
`
export const ButtonCont = styled.div`
margin: auto;
max-width: 500px;
display: flex;
justify-content: center;
margin-top: 50px;
`
export const ButtonImg = styled.img`
height: 25px;
position: absolute;
margin-top: -15px;
margin-left: -105px;
`
export const Button = styled.button`
background-color: blue;
color: white;
height: 60px;
width: 220px;
border-radius: 30px;
font-size: larger;
box-shadow:10px 10px 50px blue;


&&:hover{
    border: white solid 2px;
    background-color: black;
    cursor: pointer;
}
`
export const HeaderImg = styled.img`
width:90%;
max-width: 1000px;
position: absolute;
`

export const ImgDiv = styled.div`
display: flex;
justify-content: center;
margin-top: 50px;
height: 500px;
${media.lessThan('large')`
    height:400px;
`}
${media.lessThan("medium")`
    height:300px;
`}
${media.lessThan("small")`
    height:200px;
`}
`