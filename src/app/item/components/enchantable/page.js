'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム enchantableコンポーネント';

const definition = PropertyDefinition({
    name: 'enchantable - エンチャント',
    description: 'アイテムに適用可能なエンチャントを設定する。',
    type: 'object',
    properties: [
        {
            name: 'slot [必須]',
            description: '適用できるエンチャントの種類。例えば、bowを入れるとアイテムは弓のようにエンチャントができる。',
            type: 'string'
        },
        {
            name: 'value [必須]',
            description: '良いエンチャントがつく確率。',
            type: 'integer'
        }
    ],
    examples: [
        {
            name: 'example',
            code: `"minecraft:enchantable": {
    "slot": "sword",
    "value": 100
}`
        }
    ]
});

export default function Page() {
    return (
        <div className="main-content">
            <title>{title}</title>
            {definition}
        </div>
    );
}