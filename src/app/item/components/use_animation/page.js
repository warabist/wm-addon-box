'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム use_animationコンポーネント';

const definition = <PropertyDefinition definition={{
    name: 'use_animation - 使用アニメーション',
    description: '使用した時プレイヤーに再生されるアニメーションとサウンド。block, bow, brush, camera, crossbow, drink, eat, none, spear, spyglassの内から選べる。',
    type: 'string | object',
    properties: [
        {
            name: 'value',
            type: 'string'
        }
    ],
    examples: [
        {
            id: 'example',
            code: `"minecraft:use_animation": "eat"`
        },
        {
            id: 'example-object',
            code: `"minecraft:use_animation": {
    "value": "eat"
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