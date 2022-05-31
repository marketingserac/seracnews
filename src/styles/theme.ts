import { extendTheme } from '@chakra-ui/react'



export const theme = extendTheme({
    colors: {
        gray: {
            "600": "#4F4F4F",
        },
        orange: {
            "300": "#F39325",
        },
        blue: {
            "300": "#6EC7F1",
            "900": "#0c78b7",
        }
     
    },
    fonts: {
        heading: "ComoBold",
        body: "ComoMedio"
        


    },
    styles: {
        global: {
            '::-webkit-scrollbar': {
                width: '10px',
                borderRadius: '8px',
                position: 'relative',

                backgroundColor: `rgba(0, 0, 0, 0.05)`,
            },
            '&::-webkit-scrollbar-thumb': {
                position: 'relative',

                backgroundColor: `#F39325`,

            },
            html: {
                width: '100%',
                padding: '0px',
                overflowx: 'hidden',

            },
            body: {
                color: 'gray.600',
                width: '100%',
                padding: '0px',
                overflowx: 'hidden',
                margin: '0px'
            },
            p: {
color: 'gray.600',
            },
            h1: {
                fontSize: '5rem'

            }
        }
    }
})