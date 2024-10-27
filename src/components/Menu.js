import Link from 'next/link';

/**
 * タイトルとリンクテキストで構成されるメニュー。
 * @param {string} title 
 * @param {{
 *   text: string,
 *   pagePath: string
 * }[]} listItems
 * @returns {JSX.Element}
 */
export default function Munu(title, listItems) {

    const list = listItems.map(listItem =>
        <li className='list-point-white'>
            <Link className='link-text' href={listItem.pagePath}>{listItem.text}</Link>
        </li>
    );

    return (
        <div className='menu-background'>
            <h2>{title}</h2>
            <ul key='list'>{list}</ul>
        </div>
    );

}