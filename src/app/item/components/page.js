'use client';

import PropertyDefinition from "@/components/PropertyDefinition";
import ListGrid from "@/components/ListGrid";

const definition = PropertyDefinition({
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
});

const propertyList = ListGrid('コンポーネント一覧', [
    {
        name: 'allow_off_hand - オフハンドの許可',
        path: '/allow_off_hand'
    },
    {
        name: 'block_placer - ブロック設置',
        path: '/block_placer'
    },
    {
        name: 'bundle_interaction - バンドルインタラクション',
        path: '/bundle_interaction'
    },
    {
        name: 'can_destroy_in_creative - クリエイティブでの破壊',
        path: '/can_destroy_in_creative'
    },
    {
        name: 'cooldown - クールダウン',
        path: '/cooldown'
    },
    {
        name: 'custom_components - カスタムコンポーネント',
        path: '/custom_components'
    },
    {
        name: 'damage - 攻撃力',
        path: '/damage'
    },
    {
        name: 'damage_absorption - 吸収ダメージ設定',
        path: '/damage_absorption'
    },
    {
        name: 'digger - 破壊ツール',
        path: '/digger'
    },
    {
        name: 'display_name - 表示名',
        path: '/display_name'
    },
    {
        name: 'durability - 耐久',
        path: '/durability'
    },
    {
        name: 'durability_sensor - 耐久センサー',
        path: ''
    },
    {
        name: 'dyeable - 染色',
        path: ''
    },
    {
        name: 'enchantable - エンチャント',
        path: ''
    },
    {
        name: 'entity_placer - エンティティ設置',
        path: ''
    },
    {
        name: 'food - 食料',
        path: ''
    },
    {
        name: 'fuel - 燃料',
        path: ''
    },
    {
        name: 'glint - 輝き',
        path: ''
    },
    {
        name: 'hand_equipped - 武器のように所持',
        path: ''
    },
    {
        name: 'hover_text_color - ホバー時の文字色',
        path: ''
    },
    {
        name: 'icon - アイコン',
        path: ''
    },
    {
        name: 'interact_button - 使用ボタン',
        path: ''
    },
    {
        name: 'liquid_clipped - 液体への判定',
        path: ''
    },
    {
        name: 'max_stack_size - 最大スタック数',
        path: ''
    },
    {
        name: 'projectile - 発射体',
        path: ''
    },
    {
        name: 'rarity - 希少度',
        path: ''
    },
    {
        name: 'record - レコード',
        path: ''
    },
    {
        name: 'repairable - 修理',
        path: ''
    },
    {
        name: 'shooter - 発射',
        path: ''
    },
    {
        name: 'should_despawn - デスポーン',
        path: ''
    },
    {
        name: 'stacked_by_data - 別データ値とのスタック',
        path: ''
    },
    {
        name: 'storage_item - ストレージ',
        path: ''
    },
    {
        name: 'tags - タグ',
        path: ''
    },
    {
        name: 'throwable - 投擲',
        path: ''
    },
    {
        name: 'use_animation - 使用アニメーション',
        path: ''
    },
    {
        name: 'use_modifiers - 使用設定',
        path: ''
    },
    {
        name: 'wearable - 着用',
        path: ''
    }
], '/item/components');

export default function Page() {
    return (
        <div className="main-content">
            <title>アイテム コンポーネント</title>
            {definition}
            {propertyList}
        </div>
    );
}