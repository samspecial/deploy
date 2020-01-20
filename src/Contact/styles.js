import styled from 'styled-components';

export const Header = styled.header`
width:100%;
height:60vh;
background: snow;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 30px;

p{
    line-height:24px;
}
h5{
    font-size: 14px;
    text-transform:uppercase;
    color: #3a5382;
    font-weight: 400;

}
h1{
    font-size:45px !important;
    font-weight: 400;
    margin: 50px 0;
}
@media only screen and (min-width:768px){
    h1{
        font-size:60px !important;
    }
   p, h5{
        font-size:20px !important;
    }
    
}

`
export const Section = styled.section`
width:100%;
height:100%;
padding: 50px 0;
background:linear-gradient(175deg, snow 0 25%, #E8E2E2 20%);

@media only screen and (max-width:480px){
   padding: 20px 0 50px 0;
   background:linear-gradient(175deg, snow 0 15%, #E8E2E2 10%);
}
`

export const Form = styled.form`
width:50%;
height:80vh;
display:flex;
flex-direction:column;

@media only screen and (max-width:480px){
    width:90%;
    margin:0 auto;
}

.form-group{
    position: relative;
    height:60px;
    margin-bottom:20px;
    width:100%;
    overflow:hidden;
    
}

input.input{
    width:100%;
    height: 100%;
    color:#3a5382;
    padding-top: 20px;
    border: none;
    outline:none;
    font-size:16px;
}

label{
    position:absolute;
    width:100%;
    height:115%;
    left:0;
    bottom:0;
    pointer-events:none;
    text-align:left;
    border-bottom: 1px solid #3a5382;
   
}
label::after{
    content:"";
    position:absolute;
    width:101%;
    height:115%;
    left:-1px;
    bottom:-1px;
    border-bottom: 3px solid hsl(22, 88%, 58%);
    transform: translateX(-100%);
    transition: transform 0.3s ease; 
}

label .content-name{
position:absolute;
left:0;
bottom:3px;
height:30px;

}

input:focus + .content .content-name, input:valid + .content .content-name{
    transform: translateY(-100%);
    font-size:12px;
    color: #3a5382;
}

input:focus + .content::after, input:valid + .content::after{
transform: translateX(0%);
}

textarea{
    overflow:auto;
    border-radius:0;
    border:1px solid #3a5382;
    resize:none;
    color: #3a5382;
}
textarea:focus{
border:2px solid hsl(22, 88%, 58%)
}

`
export const Button = styled.button`
width:100%;
height:50px;
padding:7px 0;
text-align:center;
text-transform:uppercase;
border: 1px solid #3a5382;
color:#3a5382;
font-weight:700;
margin-top:30px;
background:transparent;
&:active{
    animation: fillet 0.3s ease forwards;
}
@keyframes fillet{
    from{
background-color: white;
    }
   to{
        background-color:#3a5382;
        color:white;
    }
}
`