'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム use_modifierコンポーネント';

const definition = <PropertyDefinition definition={{
    name: 'use_modifiers - 使用設定',
    description: 'アイテムを使用するときの設定。',
    type: 'object',
    properties: [
        {
            name: 'movement_modifier',
            description: '使用している時の移動速度。1.0から0.0までの値で設定できる。',
            type: 'number'
        },
        {
            name: 'use_duration',
            description: 'アイテムを使える最大時間。',
            type: 'number'
        }
    ],
    examples: [
        {
            id: 'example',
            code: `"minecraft:use_modifier": {
    "movement_modifier": 0.35,
    "use_duration": 1.6
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