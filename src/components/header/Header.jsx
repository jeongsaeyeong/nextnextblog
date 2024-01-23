import Link from 'next/link'
import React from 'react'
import Theme from '../theme/Theme'

export const Header = () => {
    return (
        <header id="header" role="banner">
            <div className='left'>
                <h1 className='logo'>
                    <Link href="/">webs ai</Link>
                </h1>
            </div>
            <Theme />
        </header>
    )
}
