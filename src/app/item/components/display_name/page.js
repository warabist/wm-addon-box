'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム display_nameコンポーネント';

const definition = <PropertyDefinition definition={{
    name: 'display_name - 表示名',
    description: 'アイテムの表示名。',
    type: 'object',
    properties: [
        {
            name: 'value',
            description: 'アイテムの表示名。リソースパックのlangを指定することもできる。',
            type: 'string'
        }
    ],
    examples: [
        {
            id: 'example',
            code: `"minecraft:display_name": {
    "value": "勇者の剣"
}`
        },
        {
            id: 'example-lang',
            code: `"minecraft:display_name": {
    "value": "item.apple.name"
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