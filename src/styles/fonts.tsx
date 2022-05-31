import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: 'Como Normal';
      font-weight: 700;
      src: url('../assets/fonts/ComoNormal.otf');
    }
    @font-face {
      font-family: 'ComoMedio';
      font-weight: 700;
      src: url('../assets/fonts/ComoMdio.otf');
    }
    @font-face {
      font-family: 'ComoBold';
      font-style: bold;
      font-weight: bold;
      font-display: swap;
      src: url('../assets/fonts/ComoBold.otf');
    }
    @font-face {
      font-family: 'ComoDenso';
      font-style: bold;
      font-weight: bold;
      font-display: swap;
      src: url('../assets/fonts/ComoDenso.otf');
    }
      `}
  />
);

export default Fonts;
