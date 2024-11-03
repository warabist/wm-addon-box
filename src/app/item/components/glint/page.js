'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム glintコンポーネント';

const definition = <PropertyDefinition definition={{
    name: 'glint - 輝き',
    description: 'trueでエンチャントされたような輝きをつける。',
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
            code: `"minecraft:glint": true`
        },
        {
            id: 'example-object',
            code: `"minecraft:glint": {
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