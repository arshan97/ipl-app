import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    html{
        @media (max-width: 1500px) {
            font-size: 62.5%;
        }
    }
    body{
       background: rgb(33, 58, 136);
      font-family: 'Special Elite', cursive;
      ul {
        li {
            list-style: none;
        }
    }
  }
      
    button{
      font-family: 'Special Elite', cursive;
        font-weight: bold;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
         border-radius: 10px;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        &:hover {
        background: #23d997;
        color: white;
        }
    }
    h2{
        font-weight: lighter;
        font-size: 4rem;
        line-height: 1.2;
    }
    h3{
        color:white;
    }
    p{
        padding: 3rem 0rem;
        color: #cccccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
    h4{
        font-size: 2.5rem;
    }
    span{
        font-weight: bold;
        color: #23d997;
    }
    a{
        font-size: 1.1.rem;
    }
    
`
export default GlobalStyle
