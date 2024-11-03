'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム hover_text_colorコンポーネント';

const definition = <PropertyDefinition definition={{
    name: 'hover_text_color - ホバー時の文字色',
    description: 'ホバー時の文字色を指定する。<a href="https://ja.minecraft.wiki/w/%E8%A3%85%E9%A3%BE%E3%82%B3%E3%83%BC%E3%83%89#%E3%82%AB%E3%83%A9%E3%83%BC%E3%82%B3%E3%83%BC%E3%83%89">使用可能な色一覧</a>',
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
            code: `"minecraft:hover_text_color": "gold"`
        },
        {
            id: 'example-object',
            code: `"minecraft:hover_text_color": {
    "value": "gold"
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