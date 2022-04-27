import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


html, body{
    font-family: 'Nunito Sans', sans-serif;
}
html{
    font-size:15px;
    box-sizing: border-box;
}

:root{
    --black:#23242A;
    --grey-1:#2B2F3A;
    --grey-2:#333740;
    --grey-3:#3C4149;
    --grey-4:#B1B8CA;
    --white:#E9ECF2;
    --blue:#305DF6;
    --blue-dark:#2951D9;
}
  body {

    margin: 0;
    padding: 0;
    background: var(--black);
   font-weight: 200;
   box-sizing: border-box;
   overflow-x: hidden;
  }


.btn{
border-radius: 50px;
    padding: 4% 8%;
    border: none;
    -webkit-transition: all .2s ease-out;
  -moz-transition: background-color all .2s ease-out;
  -o-transition: background-color all .2s ease-out;
  transition: background-color all .2s ease-out;
  text-decoration:none;
  font-weight: 600;
    font-size: .9rem;
}
  .btn-white{
    background: var(--white);
    color: var(--blue);
  }
  .btn-white:hover {
background:var(--black);
color:var(--white);
  }
`;
export default GlobalStyle;
