'use client';

import PropertyDefinition from "@/components/PropertyDefinition";
import ListGrid from "@/components/ListGrid";

const definition = <PropertyDefinition definition={{
    name: 'components',
    description: 'アイテムの性質を決めるコンポーネントをいれるプロパティ。',
    type: 'object',
    examples: [
        {
            id: 'example',
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
}} />;

const propertyList = <ListGrid title="コンポーネント一覧" basePath="/item/components" listItems={[
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
        path: '/durability_sensor'
    },
    {
        name: 'dyeable - 染色',
        path: '/dyeable'
    },
    {
        name: 'enchantable - エンチャント',
        path: '/enchantable'
    },
    {
        name: 'entity_placer - エンティティ設置',
        path: '/entity_placer'
    },
    {
        name: 'food - 食料',
        path: '/food'
    },
    {
        name: 'fuel - 燃料',
        path: '/fuel'
    },
    {
        name: 'glint - 輝き',
        path: '/glint'
    },
    {
        name: 'hand_equipped - 武器として所持',
        path: '/hand_equipped'
    },
    {
        name: 'hover_text_color - ホバー時の文字色',
        path: '/hover_text_color'
    },
    {
        name: 'icon - アイコン',
        path: '/icon'
    },
    {
        name: 'interact_button - 使用ボタン',
        path: '/interact_button'
    },
    {
        name: 'liquid_clipped - 液体への判定',
        path: '/liquid_clipped'
    },
    {
        name: 'max_stack_size - 最大スタック数',
        path: '/max_stack_size'
    },
    {
        name: 'projectile - 発射体',
        path: '/projectile'
    },
    {
        name: 'rarity - 希少度',
        path: '/rarity'
    },
    {
        name: 'record - レコード',
        path: '/record'
    },
    {
        name: 'repairable - 修理',
        path: '/repairable'
    },
    {
        name: 'shooter - 発射',
        path: '/shooter'
    },
    {
        name: 'should_despawn - デスポーン',
        path: '/should_despawn'
    },
    {
        name: 'stacked_by_data - 別データ値とのスタック',
        path: '/stacked_by_data'
    },
    {
        name: 'storage_item - ストレージ',
        path: '/storage_item'
    },
    {
        name: 'tags - タグ',
        path: '/tags'
    },
    {
        name: 'throwable - 投擲',
        path: '/throwable'
    },
    {
        name: 'use_animation - 使用アニメーション',
        path: '/use_animation'
    },
    {
        name: 'use_modifiers - 使用設定',
        path: '/use_modifiers'
    },
    {
        name: 'wearable - 着用',
        path: '/wearable'
    }
]} />;

export default function Page() {
    return (
        <div className="main-content">
            <title>アイテム コンポーネント</title>
            {definition}
            {propertyList}
        </div>
    );
}