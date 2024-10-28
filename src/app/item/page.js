import Menu from '@/components/Menu';

export const metadata = {
    title: 'アイテム'
};

export default function Page() {

    return (
        <div className='main-content'>
            {
                Menu('アイテム', [
                    {
                        text: 'ディスクリプション',
                        path: '/item/description'
                    },
                    {
                        text: 'コンポーネント',
                        path: '/item/components'
                    }
                ])
            }
        </div>
    );

}