'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム interact_buttonコンポーネント';

const definition = <PropertyDefinition definition={{
    name: 'interact_button - 使用ボタン',
    description: 'trueかstringで、タッチ操作のときに使用ボタンを表示する。stringの場合、ボタンのテキストを変えることができる。',
    type: 'boolean | string',
    examples: [
        {
            id: 'example',
            code: `"minecraft:interact_button": true`
        },
        {
            id: 'example-string',
            code: `"minecraft:interact_button": "これは使用ボタンです"`
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