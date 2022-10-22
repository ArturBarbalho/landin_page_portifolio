import styled from 'styled-components'
import media from 'styled-media-query'
export const Cta = styled.div`
    width:90%;
    max-width:1200px;
    background-color: blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
    padding-bottom: 50px;
    border-radius: 40px;
    
h2{
  color: white ;
  font-size: 60px;
  margin: 0;
  text-align: center;
}
p{
    color: lightgray;
    max-width: 700px;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 50px;
}
`
  

export const ButtonCta = styled.button`
    border-radius: 50px;
    font-size: larger ;
    padding: 17px;
    width: 230px;
    border: 1px solid white;
    &&:hover{
        cursor: pointer;
        border: 1px solid black;
    }
`

export const Wapper = styled.main`
background-color: black;
width: 100%;
height: 300px;
${media.lessThan('medium')`
    height:500px;
`}
.div{
    position: absolute;
    width: 97%;
    display: flex;
    justify-content: center;
}
`