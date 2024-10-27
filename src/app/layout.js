import '@/globals.css';
import iconImage from '@/icon.png';

export default function GlobalLayout({ children }) {

    return (
        <html>
            <head>
                <meta charSet='utf-8'></meta>
                <link rel='shortcut icon' href={iconImage.src}></link>
            </head>
            <body>
                <header>
                    <img src={iconImage.src} alt=''></img>
                    <h1>WM-ADDON-BOX</h1>
                    <ul>
                        <li>
                            <a href='../' className='header-list-item'>ホーム</a>
                            <a href='../' className='header-list-item'>X</a>
                            <a href='../' className='header-list-item'>Discord</a>
                        </li>
                    </ul>
                </header>
                <hr size='2' color='darkgray' style={{ marginTop: 0 }}></hr>
                {children}
            </body>
        </html>
    );

}