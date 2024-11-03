'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム dyeableコンポーネント';

const definition = <PropertyDefinition definition={{
    name: 'dyeable - 染色',
    description: 'アイテムを染色可能にする。アイテムのもとのテクスチャは iconコンポーネント/textures/dyed で指定し、画像はtga形式にする必要がある。',
    type: 'object',
    properties: [
        {
            name: 'default_color',
            description: '染色前のデフォルトの色を設定する。カラーコードかRGBで指定。',
            type: 'string | integer[]'
        }
    ],
    examples: [
        {
            name: 'example-code',
            code: `"minecraft:dyeable": {
    "default_color": "#fef4f4"
}`
        },
        {
            name: 'example-rgb',
            code: `"minecraft:dyeable": {
    "default_color": [ 254, 244, 244 ]
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