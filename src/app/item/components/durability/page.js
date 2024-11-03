'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム durabilityコンポーネント';

const definition = <PropertyDefinition definition={{
    name: 'durability - 耐久',
    description: 'アイテムの耐久値。',
    type: 'object',
    properties: [
        {
            name: 'damage_chance',
            description: 'アイテムの耐久値が減る確率をパーセントで指定する。最小値(min)と最大値(max)を含むint範囲として定義される。',
            type: 'object',
            properties: [
                {
                    name: 'max',
                    type: 'integer'
                },
                {
                    name: 'min',
                    type: 'integer'
                }
            ]
        },
        {
            name: 'max_durability [必須]',
            description: '最大耐久値。このアイテムが壊れるまでに受けることができるダメージの量。',
            type: 'integer'
        }
    ],
    examples: [
        {
            id: 'example',
            code: `"minecraft:durability": {
    "damage_chance": {
        "min": 0,
        "max": 80
    },
    "max_durability": 1000
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