import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap');


 * {
   box-sizing: border-box;
   margin: 0;
   /* padding: 0; */
 }

 body {
   font-family: 'Rubik', sans-serif;
   background-color: #0E1323;
 }


 
 
`;

export default GlobalStyles;
