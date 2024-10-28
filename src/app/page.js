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
                        title: 'エンティティ',
                        image: entityImage,
                        path: ''
                    },
                    {
                        title: 'ブロック',
                        image: blockImage,
                        path: ''
                    }
                ])
            }
        </div>
    );

}