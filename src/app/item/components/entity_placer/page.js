'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム entity_placerコンポーネント';

const definition = PropertyDefinition({
    name: 'entity_placer - エンティティ設置',
    description: 'エンティティを設置できるようにする。',
    type: 'object',
    properties: [
        {
            name: 'dispense_on',
            description: 'ディスペンサーでの、エンティティを設置できるブロックの条件。stringの場合はブロックのIDを入れる。',
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
                    type: 'object',
                    examples: [
                        {
                            name: 'states-example-dispense_on',
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
                            name: 'use_on/tags-any',
                            code: `"tags": "query.any_tag('stone', 'wood')"`
                        },
                        {
                            name: 'use_on/tags-all',
                            code: `"tags": "query.all_tag('stone', 'minecraft:iron_tier_destructible')"`
                        }
                    ]
                }
            ]
        },
        {
            name: 'entity',
            description: '設置するエンティティのID。',
            type: 'string'
        },
        {
            name: 'use_on',
            description: 'エンティティを設置できるブロックの条件。stringの場合はブロックのIDを入れる。',
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
                    type: 'object',
                    examples: [
                        {
                            name: 'states-example-use_on',
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
                            name: 'use_on/tags-any',
                            code: `"tags": "query.any_tag('stone', 'wood')"`
                        },
                        {
                            name: 'use_on/tags-all',
                            code: `"tags": "query.all_tag('stone', 'minecraft:iron_tier_destructible')"`
                        }
                    ]
                }
            ]
        }
    ],
    examples: [
        {
            name: 'example',
            code: `"minecraft:entity_placer": {
    "entity": "minecraft:pig",
    "dispense_on": [
        {
            "tags": "query.any_tag('dirt')"
        }
    ],
    "use_on": [
        {
            "tags": "query.any_tag('dirt')"
        }
    ]
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