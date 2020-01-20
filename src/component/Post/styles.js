import styled from 'styled-components';

export const Section = styled.section`
width:90%;
height:220px;
display:flex;
flex-direction: column;
justify-content: space-around;
align-items:flex-start;
background-color:white;
border: 1px solid black;
border-radius: 8px;
margin: 10px auto;

@media only screen and (min-width: 480px){
    width:30%;
    
}
`

export const Article = styled.article`
padding:10px 20px;

width:100%;

h2{
    font-weight:bold;
    font-size:1rem;
    margin-bottom:1rem;
    text-transform:uppercase;
}

p{
    font-size:0.9rem;
line-height:1.4rem;
}

@media only screen and (min-width:480px){
    h2{
        font-size:1.5rem;
    }
    p{
        font-size:1.2rem
        line-height:1.5rem;
    }
}
`

export const Div = styled.div`
width: 100%;
height:fit-content;
display:flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items:space-around;
background-color: #3a5382;


`