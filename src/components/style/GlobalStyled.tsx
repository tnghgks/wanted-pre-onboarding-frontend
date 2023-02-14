import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

// 교보손글씨
@font-face {
    font-family: 'KyoboHand';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/KyoboHand.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'LINESeedKR-Bd';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Bd.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

:root{
    --bg-color:#311D3F;
    --accent-color:#E23E57;
    --color-type-01:#FFFFFF;
    --color-type-02:#000000;
    --color-type-04:#D9D9D9;
}
* {
  box-sizing : border-box;
  font-family: inherit;
}
html{
    font-size:10px;
}
body{
    background-color: var(--bg-color);
    font-family: "LINESeedKR-Bd";
}
.ir-hidden{
   position: absolute;
   clip: rect(0 0 0 0);
   width: 1px;
   height: 1px;
   margin: -1px;
   overflow: hidden;
}
`;

export default GlobalStyle;
