import styled from 'styled-components'
import media from 'styled-media-query'
export const Wrapper = styled.main`
background-color: black;
display: flex;
justify-content: center;
align-items: center;
padding-top: 50px;
padding-bottom: 50px;
${media.lessThan('large')`
    flex-direction:column;
`}
`

export const Img = styled.img`
width: 90%;
max-width: 837px;
${media.lessThan('large')`
    margin-top:50px;
`}
`

export const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
h2{
    color: white;
    font-size: 60px;
    margin: 0;
    text-align: left;
    width: 100%;
    max-width: 500px;
}
p{
    color: darkgray;
    max-width: 500px;
    margin-top: 50px;
    margin-bottom: 50px;
    
}
${media.lessThan('large')`
    h2{font-size:50px;}
`}
${media.lessThan('small')`
    h2{text-align:center;}
`}
`

export const Button = styled.button`
background-color: black;
color: darkgray;
border: 1px solid darkgray;
padding: 15px;
font-size: larger;
border-radius: 30px;
width: 250px;
&&:hover{
    cursor: pointer;
    border-color:white;
    color: white;
}
`

