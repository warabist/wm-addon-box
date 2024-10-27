import '@/globals.css';
import iconImage from '@/icon.png';
import isProduction from "@/isProduction";

export const metadata = {
    title: {
        template: '%s | WM-ADDON-BOX'
    },
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
                    <img src={iconImage.src} alt=''></img>
                    <h1>WM-ADDON-BOX</h1>
                    <ul>
                        <li>
                            <a href={(isProduction() ? 'wm-addon-box' : '') + '/'} className='header-list-item'>ホーム</a>
                            <a href='https://x.com/motiwarabist' className='header-list-item'>X</a>
                            <a href='https://discord.gg/ZyrbU3GkAW' className='header-list-item'>Discord</a>
                        </li>
                    </ul>
                </header>
                <hr size='2' color='darkgray' style={{ marginTop: 0 }}></hr>
                {children}
            </body>
        </html>
    );

}