'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム wearableコンポーネント';

const definition = <PropertyDefinition definition={{
    name: 'wearable - 着用',
    description: 'アイテムを着用できるようにする。',
    type: 'object',
    properties: [
        {
            name: 'protection',
            description: '防御力。デフォルトで0。',
            type: 'integer'
        },
        {
            name: 'slot [必須]',
            description: 'どのスロットに装備できるか。slot.armor.chest, slot.armor.feet, slot.armor.head, slot.armor.legs, slot.weapon.offhandの内から選べる。',
            type: 'string'
        }
    ],
    examples: [
        {
            id: 'example',
            code: `"minecraft:wearable": {
    "protection": 10,
    "slot": "slot.armor.chest"
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