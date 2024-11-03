'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム rarityコンポーネント';

const definition = <PropertyDefinition definition={{
    name: 'rarity - 希少度',
    description: 'アイテムの希少度を決める。common、uncommon、rare、epicの内から選ぶことができる。',
    type: 'string | object',
    properties: [
        {
            name: 'value',
            type: 'string'
        }
    ],
    examples: [
        {
            id: 'example',
            code: `"minecraft:rarity": "epic"`
        },
        {
            id: 'example-object',
            code: `"minecraft:rarity": {
    "value": "epic"
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