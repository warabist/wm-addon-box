import TitleAndImageCardGrid from '@/components/TitleAndImageCardGrid';
import itemImage from '@/images/item.png';
import entityImage from '@/images/entity.png';
import blockImage from '@/images/block.png';

export const metadata = {
    title: 'ホーム | WM-ADDON-BOX'
};

export default function Home() {

    return (
        <div className='main-content'>
            {
                TitleAndImageCardGrid([
                    {
                        title: 'アイテム',
                        image: itemImage,
                        path: '/item'
                    },
                    {
                        title: 'エンティティ(準備中)',
                        image: entityImage,
                        path: ''
                    },
                    {
                        title: 'ブロック(準備中)',
                        image: blockImage,
                        path: ''
                    }
                ])
            }
        </div>
    );

}