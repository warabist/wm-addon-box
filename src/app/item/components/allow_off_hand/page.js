'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム allow_off_handコンポーネント';

const definition = PropertyDefinition({
    name: 'allow_off_hand - オフハンドの許可',
    description: 'アイテムをオフハンドで持つことを許可するか。',
    type: 'boolean | object',
    properties: [
        {
            name: 'value',
            type: 'boolean'
        }
    ],
    examples: [
        {
            name: 'example',
            code: `"minecraft:allow_off_hand": true`
        },
        {
            name: 'example-object',
            code: `"minecraft:allow_off_hand": {
    "value": true
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