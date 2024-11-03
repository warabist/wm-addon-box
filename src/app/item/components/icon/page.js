'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム iconコンポーネント';

const definition = <PropertyDefinition definition={{
    name: 'icon - アイコン',
    description: 'リソースパックのitem_texture.jsonで定義された、アイテムのアイコンを指定する。',
    type: 'string | object',
    properties: [
        {
            name: 'textures',
            type: 'object',
            properties: [
                {
                    name: 'default',
                    description: 'アイテムのデフォルトのテクスチャ。',
                    type: 'string'
                },
                {
                    name: 'dyed',
                    description: '染色されるときベースとなるテクスチャ。dyeコンポーネントが必要と思われる。画像はtga形式である必要がある。',
                    type: 'string'
                }
            ]
        }
    ],
    examples: [
        {
            id: 'example',
            code: `"minecraft:icon": "stick"`
        },
        {
            id: 'example-object',
            code: `"minecraft:icon": {
    "textures": {
        "default": "stick"
    }
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