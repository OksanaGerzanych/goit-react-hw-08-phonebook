import { createGlobalStyle }  from 'styled-components'
import 'modern-normalize';
export const GlobalStyle = createGlobalStyle`
body {
 
  margin: 0px;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
p, h1, h2, ul {
  margin: 0;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`