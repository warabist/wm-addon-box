'use client';

import PropertyDefinition from "@/components/PropertyDefinition";
import PropertyList from "@/components/PropertyList";

export default function Page() {

    return (
        <div className="main-content">
            <title>アイテム/コンポーネント</title>
            {PropertyDefinition({
                name: 'components',
                description: 'アイテムの性質を決めるコンポーネントをいれるプロパティ。',
                type: 'object',
                examples: [
                    {
                        name: 'example',
                        code: `{
    "format_version": "1.21.30",
    "minecraft:item": {
        "description": {...}, //省略
        "components": { //この位置
            "minecraft:icon": "stick"
        }
    }
}`
                    }
                ]
            })}

            {PropertyList('コンポーネントリスト', [
                {
                    name: 'allow_off_hand - オフハンドの許可',
                    path: '/item/component/allow_off_hand'
                },
                {
                    name: 'block_placer - ブロック設置',
                    path: '/item/component/block_placer'
                }
            ])}
        </div>
    );

}