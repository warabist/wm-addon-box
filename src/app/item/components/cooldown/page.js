'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム cooldownコンポーネント';

const definition = PropertyDefinition({
    name: 'cooldown - クールダウン',
    description: 'アイテムのクールダウンを設定する。',
    type: 'object',
    properties: [
        {
            name: 'category [必須]',
            description: 'クールダウンのカテゴリ。同じカテゴリのクールダウンを持つアイテムは全てクールダウンされる。カテゴリーはバニラのものだけでなく、自分で新しく作ることも可能。',
            type: 'string'
        },
        {
            name: 'duration [必須]',
            description: 'クールダウンの時間(秒単位)。',
            type: 'number'
        }
    ],
    examples: [
        {
            name: 'example',
            code: `"minecraft:cooldown": {
    "category": "my_food",
    "duration": 10
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