'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム storage_itemコンポーネント';

const definition = <PropertyDefinition definition={{
    name: 'storage_item - ストレージ',
    description: 'アイテムをバンドルのようなストレージにする。',
    type: 'object',
    properties: [
        {
            name: 'allow_nested_storage_items',
            description: 'このアイテムのストレージ内で別のストレージアイテムを入れることを許可するか。デフォルトではtrue。',
            type: 'boolean'
        },
        {
            name: 'allowed_items',
            description: 'ストレージに入れることが許可されるアイテムのIDのリスト。空の場合全てのアイテムが許可される。',
            type: 'string[]'
        },
        {
            name: 'banned_items',
            description: 'ストレージに入れることが許可されないアイテムのIDのリスト。',
            type: 'string[]'
        },
        {
            name: 'max_slots',
            description: 'アイテムの最大スタック数。最大値、デフォルト値はともに64。',
            type: 'integer'
        },
        {
            name: 'max_weight_limit',
            description: 'アイテムの合計の最大量。最大値、デフォルト値はともに64。',
            type: 'integer'
        },
        {
            name: 'weight_in_storage_item',
            description: 'このアイテムが別のストレージアイテム内にあるときとるスロット数。0を指定するとこのアイテムが別のストレージアイテムで許可されなくなる。デフォルト値は4。',
            type: 'integer'
        }
    ],
    examples: [
        {
            id: 'example',
            code: `"minecraft:storage_item": {
    "allow_nested_storage_items": true,
    "allowed_items": [ "minecraft:iron_ingot", "minecraft:gold_ingot" ],
    "banned_items": [ "minecraft:diamond" ],
    "max_slots": 32,
    "max_weight_limit": 32,
    "weight_in_storage_item": 0
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