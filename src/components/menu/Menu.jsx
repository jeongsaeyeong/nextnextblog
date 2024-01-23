import Link from 'next/link'
import React from 'react'

export const Menu = () => {
    const status = 'unauthenticated'
    const name = 'webs'

    return (
        <ul className='menu'>
            {status === 'authenticated' ? (
                <>
                    <li><span>#{name}님 반가워요</span></li>
                    <li><span>#로그아웃</span></li>
                </>
            ) : (
                <>
                    <li><Link href='/login'>#로그인</Link></li>
                    <li><Link href='/login'>#회원가입</Link></li>
                </>
            )}

            <li><Link href='/blog'>#블로그</Link></li>
            <li><Link href='/notice'>#게시판</Link></li>
        </ul>
    )
}
