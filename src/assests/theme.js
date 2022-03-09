import { createTheme } from "@material-ui/core";

export default createTheme({
    palette: {
      primary:{
        main: '#D2483D'
      },
      secondary:{
        main: '#000'
      }
    },


    typography: {
      subtitle1: {
        fontSize: 12,
      },
      h5: {
        fontSize: '2.6rem',
        letterSpacing: '.5px',
        fontFamily: 'Bebas Neue, cursive',
        transform: 'scaleY(1.2)'
      },
      h6: {
        fontSize: '1.2rem',
        letterSpacing: '.5px',
        fontFamily: 'Bebas Neue, cursive',
        borderBottom: '2px solid #f00'
      },
      subtitle1: {
        fontWeight: 600,
        fontSize: '1rem',
        letterSpacing: '.5px',
        fontFamily: 'Montserrat, sans-serif',
      },
      body1: {
        fontSize: '.8rem',
      },
      body2: {
        fontFamily: 'Montserrat, sans-serif',
      },
      
    },

    
})


