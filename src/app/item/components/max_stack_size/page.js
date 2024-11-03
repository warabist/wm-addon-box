'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム max_stack_sizeコンポーネント';

const definition = <PropertyDefinition definition={{
    name: 'max_stack_size - 最大スタック数',
    description: '1から64までの範囲で、最大スタック数を決められる。',
    type: 'integer | object',
    properties: [
        {
            name: 'value',
            type: 'integer'
        }
    ],
    examples: [
        {
            id: 'example',
            code: `"minecraft:max_stack_size": 16`
        },
        {
            id: 'example-object',
            code: `"minecraft:max_stack_size": {
    "value": 16
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