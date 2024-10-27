import Menu from '@/components/Menu';

export const metadata = {
    title: 'アイテム'
};

export default function Page() {

    return (
        <div>
            {
                Menu('アイテム', [
                    {
                        text: 'ディスクリプション',
                        pagePath: ''
                    },
                    {
                        text: 'コンポーネント',
                        pagePath: ''
                    }
                ])
            }
        </div>
    );

}