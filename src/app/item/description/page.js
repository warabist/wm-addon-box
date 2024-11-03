'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム description';

const definition = <PropertyDefinition definition={{
    name: 'description',
    description: 'アイテムのIDや種類を決めることができるプロパティ。',
    type: 'object',
    properties: [
        {
            name: 'identifier',
            description: 'アイテムのID。IDは半角英数字記号で 名前空間:名前 という形でなければ無効となる(記号はおそらくアンダーバーのみ)。また、名前空間にminecraftを使用してはならない。',
            type: 'string'
        },
        {
            name: 'menu_category',
            description: 'アイテムの種類。',
            type: 'object',
            properties: [
                {
                    name: 'group',
                    description: 'クリエイティブスロットからの場所。剣など。入れられる文字列は、公式が配布しているアドオンファイルのlangファイルの5551行目あたりから確認できる。自分で新しく作ることはできない。',
                    type: 'string'
                },
                {
                    name: 'category',
                    description: 'アイテムのカテゴリー。所持品、アイテムなど。 construction(構築) equipment(所持品) items(アイテム) nature(性質) none(なし) の5つから選択できる。noneの場合、コマンドからの入手も不可能となる。',
                    type: 'string'
                },
                {
                    name: 'is_hidden_in_commands',
                    description: 'アイテムがコマンドで指定できるか。trueでできない。',
                    type: 'boolean'
                }
            ]
        }
    ],
    examples: [
        {
            id: 'example',
            code: `{
    "format_version": "1.21.30",
    "minecraft:item": {
        "description": { //これ
            "identifier": "sample:item",
            "menu_category": {
                "group": "itemGroup.name.sword",
                "category": "equipment",
                "is_hidden_in_commands": false
            }
        },
        "components": {...} //省略
    }
}`
        }
    ]
}} />;

export default function Page() {
    return (
        <div className="main-content">
            <title>{title}</title>
            {definition}
        </div>
    );
}