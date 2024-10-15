import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root{
    --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;
  
  --color-green-50: #f0fdf4;  
  --color-green-100: #dcfce7; 
  --color-green-200: #bbf7d0; 
  --color-green-300: #3DDB7D; 
  --color-green-400: #32B164; 
  --color-green-500: #288F51;
  --color-green-600: #00702C; 
  --color-green-700: #005a2e; 
  --color-green-800: #003d20; 
  --color-green-900: #001a10; 
  --color-green-1000: #001a10; 


  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --backdrop-color: rgba(255, 255, 255, 0.1);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

--image-grayscale: 0;
--image-opacity: 100%;

  }

  *,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;


}

    html {
        background-color: var(--color-green-50);
        color: var(--color-grey-900);
        
    }

    body {
      font-family: "Ubuntu", sans-serif;
      font-weight: 500;
      font-style: normal;
  min-height: 100vh;
  line-height: 1.5;
  
}
button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-grey-400);
  outline-offset: -1px;
}

button:has(svg) {
  line-height: 0;
}

    a {
  color: var(--color-grey-900);
      text-decoration: none;
}
ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}


`;

export default GlobalStyles;
