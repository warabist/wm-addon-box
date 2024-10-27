import TitleAndImageCardGrid from '@/components/TitleAndImageCardGrid';

export default function Home() {

    return (
        <>
            {
                TitleAndImageCardGrid([
                    {
                        title: 'アイテム',
                        imagePath: '/images/item.png',
                        pagePath: '/'
                    },
                    {
                        title: 'エンティティ',
                        imagePath: '/images/entity.png',
                        pagePath: '/'
                    },
                    {
                        title: 'ブロック',
                        imagePath: '/images/block.png',
                        pagePath: '/'
                    }
                ])
            }
        </>
    );

}