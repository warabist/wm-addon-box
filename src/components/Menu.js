import Link from 'next/link';

/**
 * タイトルとリンクテキストで構成されるメニュー。
 * @param {string} title 
 * @param {{
 *   text: string,
 *   path: string
 * }[]} listItems
 * @returns {JSX.Element}
 */
export default function Munu(title, listItems) {

    return (
        <div className='menu-background'>
            <h2>{title}</h2>
            <ul>
                {listItems.map((listItem, index) =>
                    <li className='list-point-white' key={String(index)}>
                        <Link className='link-text' href={listItem.path}>{listItem.text}</Link>
                    </li>
                )}
            </ul>
        </div>
    );

}