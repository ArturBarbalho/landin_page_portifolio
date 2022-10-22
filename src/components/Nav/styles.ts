import styled,{css} from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
background-color: black;
display: flex;
align-items: center;
justify-content: space-around;
padding-top:20px;
padding-bottom: 20px;
${media.lessThan("medium")`
  justify-content:space-between;
`}
img{ margin-left:20px; :hover{cursor:pointer}}
.links{
  margin-top:20px;
 height:45px;
  ${media.lessThan("medium")`
     display:none;
`}
}
`
type border={hasBorder?:boolean}
export const Link = styled.a<border>`
 ${({hasBorder})=>css`
  text-decoration: none;
  color: lightgray;
  padding: 20px;
  font-size: larger;
  :hover{
    color: aliceblue;
    border:${hasBorder?'solid 1px gray':'none'};
  }
`}
`
export const Button= styled.button`
border: solid 1px gray;
background-color: black;
color: lightgray;
border-radius: 30px;
padding: 20px;
width: 200px;
font-size: larger;
:hover{
    color: aliceblue;
    border-color: aliceblue;
    cursor: pointer;
  }
  ${media.lessThan("small")`
  display:none;
`}
`
export const Menu = styled.img`
display: none;
border: solid 1px gray;
padding: 15px;
${media.lessThan("medium")`
  display:inline-block;
  margin-left:2px;
  margin-right:20px;
`}
${media.lessThan("small")`
border:none;
`}
`
type props = {show:boolean}
export const MenuItens = styled.div<props>`
${({show})=>css`
display: ${show? 'flex':'none'};
flex-direction: column;
background-color: black;
width:200px;
float: right;
text-align: center;
position: absolute;
right: 16px;
z-index: 1;
`}
`

