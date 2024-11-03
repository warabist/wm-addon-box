'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム Aコンポーネント';

const definition = <PropertyDefinition definition={{
    name: 'stacked_by_data - 別データ値とのスタック',
    description: 'データ値の違うアイテムとのスタックを許可するかどうか。',
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
            code: `"minecraft:stacked_by_data": true`
        },
        {
            id: 'example-object',
            code: `"minecraft:stacked_by_data": {
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