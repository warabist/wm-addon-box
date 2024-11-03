import Link from 'next/link';

/**
 * タイトルと画像を含んだアイテムを持つグリッド。クリックするとパスのページに飛ぶ。
 * @param {Object} props
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
 * page: string
 * }[]} props.items
 * @returns {JSX.Element}
 */
export default function TitleAndImageCardGrid({ items }) {
    return (
        <div className='title-and-image-card-grid'>
            {items.map((item, index) =>
                <div className='title-and-image-card-grid-item' key={String(index)}>
                    <Link href={item.path}>
                        <h2>{item.title}</h2>
                        <img src={item.image.src} alt=''></img> {/**画像の比率は7:5*/}
                    </Link>
                </div>
            )}
        </div>
    );
}