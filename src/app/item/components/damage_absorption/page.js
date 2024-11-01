'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム damage_absorptionコンポーネント';

const definition = PropertyDefinition({
    name: 'damage_absorption - 吸収ダメージ設定',
    description: 'アイテムが防具の時、このコンポーネントで指定したダメージの種類のみダメージが吸収される。吸収したダメージは耐久値を低下させる。wearable、durabilityコンポーネントが必要。',
    type: 'object',
    properties: [
        {
            name: 'absorbable_causes [必須]',
            description: '吸収させたいダメージの種類(minecraft damage causeで調べればでてくるはず)を指定する。',
            type: 'string[]'
        }
    ],
    examples: [
        {
            name: 'example',
            code: `"minecraft:damage_absorption": {
    "absorbable_causes": [ "sonic_boom" ]
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