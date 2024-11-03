'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム foodコンポーネント';

const definition = <PropertyDefinition definition={{
    name: 'food - 食料',
    description: 'アイテムを食べられるようにする。use_modifiersコンポーネントが必要。',
    type: 'object',
    properties: [
        {
            name: 'can_always_eat',
            description: 'trueで空腹でなくとも食べられるようになる。デフォルトではfalse。',
            type: 'boolean'
        },
        {
            name: 'nutrition',
            description: '満腹度がどれだけ回復するか。デフォルトでは0。',
            type: 'integer'
        },
        {
            name: 'saturation_modifier',
            description: '隠し満腹度がどれほど回復するか。デフォルトでは0.6。',
            type: 'number'
        },
        {
            name: 'using_converts_to',
            description: '食べた時、アイテムがここで指定したIDのアイテムに置き換わる。',
            type: 'string'
        }
    ],
    examples: [
        {
            id: 'example',
            code: `"minecraft:food": {
    "can_always_eat": true,
    "nutrition": 10,
    "saturation_modifier": 1.5,
    "using_converts_to": "minecraft:stick"
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