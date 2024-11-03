import Link from 'next/link';
import '@/globals.css';
import iconImage from '@/icon.png';

export const metadata = {
    icons: {
        icon: iconImage.src,
        shortcut: iconImage.src,
        apple: iconImage.src
    }
};

export default function GlobalLayout({ children }) {
    return (
        <html>
            <body>
                <header>
                    <Link className='link-text' href='/'>
                        <img src={iconImage.src} alt=''></img>
                    </Link>
                    <h1>WM-ADDON-BOX</h1>
                </header>
                {children}
            </body>
        </html>
    );
}