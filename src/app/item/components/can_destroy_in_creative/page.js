'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム can_destroy_in_creativeコンポーネント';

const definition = <PropertyDefinition definition={{
    name: 'can_destroy_in_creative - クリエイティブでの破壊',
    description: 'クリエイティブ状態でこのアイテムを持ちながらブロックを壊せるか。trueで許可される。',
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
            code: `"minecraft:can_destroy_in_creative": false`
        },
        {
            id: 'example-object',
            code: `"minecraft:can_destroy_in_creative": {
    "value": false
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