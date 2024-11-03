'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム diggerコンポーネント';

const definition = PropertyDefinition({
    name: 'digger - 破壊ツール',
    description: 'アイテムを破壊ツールにできる。',
    type: 'object',
    properties: [
        {
            name: 'destroy_speeds',
            description: '破壊速度とそのブロックの種類を決める。',
            type: 'object[]',
            properties: [
                {
                    name: 'block [必須]',
                    description: 'ブロックの種類。',
                    type: 'object | string',
                    properties: [
                        {
                            name: 'name',
                            description: 'ブロックのID。',
                            type: 'string'
                        },
                        {
                            name: 'states',
                            description: 'ブロックのステート。使うにはnameが必要。',
                            type: 'object',
                            examples: [
                                {
                                    name: 'states-example',
                                    code: `"states": {
    "facing_direction": 1
}`
                                }
                            ]
                        },
                        {
                            name: 'tags',
                            description: 'ブロックのタグ。molangで指定する。<a href="https://learn.microsoft.com/en-us/minecraft/creator/reference/content/blockreference/examples/vanillablocktags?view=minecraft-bedrock-stable">バニラブロックのタグ一覧</a>',
                            type: 'string',
                            examples: [
                                {
                                    name: 'destroy_speeds/block/tags-any',
                                    code: `"tags": "query.any_tag('stone', 'wood')"`
                                },
                                {
                                    name: 'destroy_speeds/block/tags-all',
                                    code: `"tags": "query.all_tag('stone', 'minecraft:iron_tier_destructible')"`
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'speed [必須]',
                    description: 'ブロックの破壊速度。',
                    type: 'integer'
                }
            ]
        },
        {
            name: 'use_efficiency',
            description: 'エンチャントがこのアイテムでの採掘に影響するかどうか。',
            type: 'boolean'
        }
    ],
    examples: [
        {
            name: 'example',
            code: `"minecraft:digger": {
    "destroy_speeds": [
        {
            "block": {
                "tags": "query.any_tag('stone')"
            },
            "speed": 20
        }
    ],
    "use_efficiency": true
}`
        }
    ]
});

export default function Page() {
    return (
        <div className="main-content">
            <title>{title}</title>
            {definition}
        </div>
    );
}