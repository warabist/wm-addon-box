'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム liquid_clippedコンポーネント';

const definition = <PropertyDefinition definition={{
    name: 'liquid_clipped - 液体への判定',
    description: 'trueにすると、液体へ向かって使用したときScriptAPIのPlayerInteractWithBlockBeforeEventが発火する。詳細不明。',
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
            code: `"minecraft:liquid_clipped": true`
        },
        {
            id: 'example-object',
            code: `"minecraft:liquid_clipped": {
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