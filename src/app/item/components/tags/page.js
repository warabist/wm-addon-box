'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム tagsコンポーネント';

const definition = <PropertyDefinition definition={{
    name: 'tags - タグ',
    description: 'アイテムのタグ。',
    type: 'object',
    properties: [
        {
            name: 'tags',
            description: 'タグのリスト。',
            type: 'string[]'
        }
    ],
    examples: [
        {
            id: 'example',
            code: `"minecraft:tags": {
    "tags": [
        "my_food"
    ]
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