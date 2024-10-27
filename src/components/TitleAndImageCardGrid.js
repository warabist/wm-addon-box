/**
 * タイトルと画像を含んだアイテムを持つグリッド。クリックするとパスのページに飛ぶ。
 * @param {{ title: string, imagePath: string, pagePath: string }[]} items
 * @returns {JSX.Element}
 */
export default function TitleAndImageCardGrid(items) {
    return (

        <div className='title-and-image-card-grid' key='gridItems'>
            {
                items.map(item =>
                    <div className='title-and-image-card-grid-item'>
                        <a href={item.pagePath}>
                            <h2>{item.title}</h2>
                            <img src={item.imagePath} alt=''></img> {/**画像の比率は7:5*/}
                        </a>
                    </div>
                )
            }
        </div>

    );
}