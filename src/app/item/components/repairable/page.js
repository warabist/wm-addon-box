'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム repairableコンポーネント';

const definition = <PropertyDefinition definition={{
    name: 'repairable - 修理',
    description: '修理素材を設定する。',
    type: 'object',
    properties: [
        {
            name: 'repair_items',
            description: '修理素材のリスト。',
            type: 'object[]',
            properties: [
                {
                    name: 'items',
                    description: '修理に使えるアイテムのIDのリスト。',
                    type: 'string[]'
                },
                {
                    name: 'repair_amount',
                    description: '耐久値をどれだけ回復するか。stringでmolang、numberで直接数値での指定となっている。',
                    type: 'string | number'
                }
            ]
        }
    ],
    examples: [
        {
            id: 'example',
            code: `"minecraft:repairable": {
    "repair_items": [
        {
            "items": [ "minecraft:stone" ],
            "repair_amount": "math.random(10, 60)"
        }
    ]
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