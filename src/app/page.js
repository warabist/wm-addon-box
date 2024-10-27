import TitleAndImageCardGrid from '@/components/TitleAndImageCardGrid';
import itemImage from '@/images/item.png';
import entityImage from '@/images/entity.png';
import blockImage from '@/images/block.png';

export const metadata = {
    title: 'ホーム | WM-ADDON-BOX'
};

export default function Home() {

    return (
        <div>
            {
                TitleAndImageCardGrid([
                    {
                        title: 'アイテム',
                        image: itemImage,
                        pagePath: '/item'
                    },
                    {
                        title: 'エンティティ',
                        image: entityImage,
                        pagePath: ''
                    },
                    {
                        title: 'ブロック',
                        image: blockImage,
                        pagePath: ''
                    }
                ])
            }
        </div>
    );

}