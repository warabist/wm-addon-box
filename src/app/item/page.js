import Menu from '@/components/Menu';

export default function Page() {

    return (
        <div className="main-content">
            <title>アイテム</title>
            <Menu title="アイテム" listItems={[
                {
                    text: 'ディスクリプション',
                    path: '/item/description'
                },
                {
                    text: 'コンポーネント',
                    path: '/item/components'
                }
            ]} />
        </div>
    );

}