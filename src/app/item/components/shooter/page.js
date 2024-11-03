'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム shooterコンポーネント';

const definition = <PropertyDefinition definition={{
    name: 'shooter - 発射',
    description: '弓やクロスボウのように、発射体を発射できるようにする。',
    type: 'object',
    properties: [
        {
            name: 'ammunition',
            description: '発射に使う弾。',
            type: 'object[]',
            properties: [
                {
                    name: 'item [必須]',
                    description: '発射に使うアイテムのID。projectileコンポーネントのあるアイテムを指定。',
                    type: 'string'
                },
                {
                    name: 'search_inventory',
                    description: '弾をインベントリから探すか。デフォルトではfalse。',
                    type: 'boolean'
                },
                {
                    name: 'use_in_creative',
                    description: 'クリエイティブモードでも使えるか。デフォルトではfalse。',
                    type: 'boolean'
                },
                {
                    name: 'use_offhand',
                    description: 'オフハンドを使うか。デフォルトではfalse。',
                    type: 'boolean'
                }
            ]
        },
        {
            name: 'charge_on_draw',
            description: 'クロスボウのように、チャージをできるか。デフォルトではfalse。',
            type: 'boolean'
        },
        {
            name: 'max_draw_duration',
            description: '最大チャージ時間。デフォルトでは0。',
            type: 'number'
        },
        {
            name: 'scale_power_by_draw_duration',
            description: 'チャージ時間によって発射のパワーを上げるかどうか。デフォルトではfalse。',
            type: 'boolean'
        }
    ],
    examples: [
        {
            id: 'example',
            code: `"minecraft:shooter": {
    "ammunition": [
        {
            "item": "minecraft:arrow",
            "search_inventory": true
        }
    ],
    "charge_on_draw": false,
    "max_draw_duration": 10,
    "scale_power_by_draw_duration": true
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