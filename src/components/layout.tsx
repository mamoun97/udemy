import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ withSlider = false, children,
}: { withSlider?: boolean, children: React.ReactNode }) {
    return (
        <div>
            <Navbar withSlider={withSlider} />
            {
                children
            }

            <Footer />
        </div>
    )
}
