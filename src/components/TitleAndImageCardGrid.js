import Link from 'next/link';

/**
 * タイトルと画像を含んだアイテムを持つグリッド。クリックするとパスのページに飛ぶ。
 * @param {{ 
 * title: string, 
 * image: { 
 *   src: string,
 *   height: number,
 *   width: number,
 *   blurDataURL: string,
 *   blurWidth: number,
 *   blurHeight: number
 * }, 
 * pagePath: string
 * }[]} items
 * @returns {JSX.Element}
 */
export default function TitleAndImageCardGrid(items) {

    const gridItems = items.map(item =>
        <div className='title-and-image-card-grid-item'>
            <Link href={item.pagePath}>
                <h2>{item.title}</h2>
                <img src={item.image.src} alt=''></img> {/**画像の比率は7:5*/}
            </Link>
        </div>
    );

    return (
        <div className='title-and-image-card-grid' key='gridItems'>
            {gridItems}
        </div>
    );

}