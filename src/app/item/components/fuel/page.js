'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム fuelコンポーネント';

const definition = <PropertyDefinition definition={{
    name: 'fuel - 燃料',
    description: 'アイテムを、かまどなどで燃料として使えるようにする。',
    type: 'number | object',
    properties: [
        {
            name: 'duration',
            description: '燃焼時間(秒単位)。',
            type: 'number'
        }
    ],
    examples: [
        {
            id: 'example',
            code: `"minecraft:fuel": 10`
        },
        {
            id: 'example-object',
            code: `"minecraft:fuel": {
    "duration": 10
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