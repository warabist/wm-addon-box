'use client';

import PropertyDefinition from "@/components/PropertyDefinition";

export default function Page() {

    return (
        <div className="main-content">
            <title>アイテム/コンポーネント/damage</title>
            {PropertyDefinition({
                name: 'damage - 攻撃力',
                description: '攻撃力をつけられる。',
                type: 'integer | object',
                properties: [
                    {
                        name: 'value',
                        type: 'integer'
                    }
                ],
                examples: [
                    {
                        name: 'example',
                        code: `"minecraft:damage": 8`
                    },
                    {
                        name: 'example-object',
                        code: `"minecraft:damage": {
    "value": 8
}`
                    }
                ]
            })}
        </div>
    );

}