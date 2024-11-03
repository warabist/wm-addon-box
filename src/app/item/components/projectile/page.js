'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム Aコンポーネント';

const definition = <PropertyDefinition definition={{
    name: 'projectile - 発射体',
    description: 'アイテムを矢のように発射できるようにする。',
    type: 'object',
    properties: [
        {
            name: 'minimum_critical_power',
            description: 'プレイヤーが発射物をクリティカルヒットさせるまでに、チャージしなければならない時間。',
            type: 'number'
        },
        {
            name: 'projectile_entity [必須]',
            description: '発射されるエンティティのID。',
            type: 'string'
        }
    ],
    examples: [
        {
            id: 'example',
            code: `"minecraft:projectile": {
    "minimum_critical_power": 2,
    "projectile_entity": "minecraft:arrow"
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