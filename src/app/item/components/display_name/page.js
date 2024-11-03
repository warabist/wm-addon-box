'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム display_nameコンポーネント';

const definition = PropertyDefinition({
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
            name: 'example',
            code: `"minecraft:display_name": {
    "value": "勇者の剣"
}`
        },
        {
            name: 'example-lang',
            code: `"minecraft:display_name": {
    "value": "item.apple.name"
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