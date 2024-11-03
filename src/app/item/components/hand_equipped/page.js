'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム hand_equippedコンポーネント';

const definition = <PropertyDefinition definition={{
    name: 'hand_equipped - 武器として所持',
    description: 'trueでアイテムを武器のように持たせる。(例: 棒、つるはし、剣)',
    type: 'boolean | object',
    properties: [
        {
            name: 'value',
            type: 'boolean'
        }
    ],
    examples: [
        {
            id: 'example',
            code: `"minecraft:hand_equipped": true`
        },
        {
            id: 'example-object',
            code: `"minecraft:hand_equipped": {
    "value": true
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