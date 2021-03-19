import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
})
const styles = {
  global: {
    h1: {
      fontSize: "36px",
      lineHeight: "48px",
      marginY: "0.5rem"
    },
    h2: {
      fontSize: "24px",
      lineHeight: "40px",
      marginY: "1rem",
      fontWeight: "500"
    },
    h3: {
      fontSize: "20px",
      lineHeight: "36px",
      fontWeight: "500"
    },
    p: {
      fontSize: "18px",
      lineHeight: "32px",
      marginY: "1rem"
    },
    a: {
      color: "blue.500",
    },
  }
}
const theme = extendTheme({
  colors: {
    primary: '#4183C4',
    black: '#16161D',
    lightgray: '#7d8589',
  },
  fonts,
  breakpoints,
  styles,
  icons: {
    logo: {
      path: (
        <svg
          width="3000"
          height="3163"
          viewBox="0 0 3000 3163"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="3000" height="3162.95" fill="none" />
          <path
            d="M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z"
            fill="currentColor"
          />
        </svg>
      ),
      viewBox: '0 0 3000 3163',
    },
  },
})

export default theme
