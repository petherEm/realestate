import React, { Children } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

import { Box } from '@chakra-ui/react'

const Layout = ({ children }) => {
    return (
        <>
        <Head>
            <title>Real Estate</title>
        </Head>
        <Box maxWidth="1280px" m="auto">
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <Footer />
        </Box>
            
        </>
    )
}

export default Layout
