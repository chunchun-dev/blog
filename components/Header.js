import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <div className="container">
                <Link href='/' className='header-title'><b>Qt Coder</b></Link>
            </div>
        </header>
    )
}
