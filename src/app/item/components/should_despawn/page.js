'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム should_despawnコンポーネント';

const definition = <PropertyDefinition definition={{
    name: 'should_despawn - デスポーン',
    description: 'アイテムが時間で自然にデスポーンするか。',
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
            code: `"minecraft:should_despawn": false`
        },
        {
            id: 'example-object',
            code: `"minecraft:should_despawn": {
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