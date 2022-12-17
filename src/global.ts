import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: "Open Sans";
        box-sizing:  border-box;
    }


    input, button, textarea, h1, h2, h3, h4, h5, h6 {
      font-family: "Open Sans";
    }



    :root {
  --primary-color: rgb(134, 71, 173);
  --secundary-color: rgb(86, 86, 86);
}

* {
  box-sizing: border-box;
}

html,
body,
#root {
  height: 100%;
      font-family: "Open Sans";
        margin: 0;
        padding: 0;
        background-color: #1E192C;
    }


}

`