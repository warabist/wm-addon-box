import TitleAndImageCardGrid from '@/components/TitleAndImageCardGrid';
import itemImage from '@/images/item.png';
import entityImage from '@/images/entity.png';
import blockImage from '@/images/block.png';

export default function Home() {

    return (
        <>
            {
                TitleAndImageCardGrid([
                    {
                        title: 'アイテム',
                        image: itemImage,
                        pagePath: '/'
                    },
                    {
                        title: 'エンティティ',
                        image: entityImage,
                        pagePath: '/'
                    },
                    {
                        title: 'ブロック',
                        image: blockImage,
                        pagePath: '/'
                    }
                ])
            }
        </>
    );

}