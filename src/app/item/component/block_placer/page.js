'use client';

import PropertyDefinition from "@/components/PropertyDefinition";

export default function Page() {

    return (
        <div className="main-content">
            <title></title>
            {PropertyDefinition({
                name: 'block_placer - ブロック設置',
                description: 'ブロックを設置できるようにする。',
                type: 'object',
                properties: [
                    {
                        name: 'block [必須]',
                        description: '置くブロックの種類をIDで指定する。',
                        type: 'string'
                    },
                    {
                        name: 'use_on',
                        description: '設置できるブロックのリスト。要素がstringのとき、それはブロックのID。',
                        type: '(object | string)[]',
                        properties: [
                            {
                                name: 'name',
                                description: 'ブロックのID。',
                                type: 'string'
                            },
                            {
                                name: 'states',
                                description: 'ブロックのステート。使うにはnameが必要。',
                                type: 'object'
                            },
                            {
                                name: 'tags',
                                description: 'ブロックのタグ。molangで指定する。<a href="https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/vanillablocktags?view=minecraft-bedrock-stable">バニラブロックのタグ一覧</a><br>(例: query.any_tag(\'stone\', \'wood\')、query.all_tag(\'stone\', \'minecraft:iron_tier_destructible\'))',
                                type: 'string'
                            }
                        ]
                    }
                ],
                examples: [
                    {
                        name: 'example',
                        code: `"minecraft:block_placer": {
    "block": "minecraft:grass_block",
    "use_on": [
        "minecraft:stone",
        {
            "name": "minecraft:barrel",
            "states": {
                "facing_direction": 1
            }
        }
    ]
}`
                    }
                ]
            })}
        </div>
    );

}