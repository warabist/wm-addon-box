'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム throwableコンポーネント';

const definition = <PropertyDefinition definition={{
    name: 'throwable - 投擲',
    description: 'アイテムを投擲できるようにする。projectileコンポーネントが必要。',
    type: 'object',
    properties: [
        {
            name: 'do_swing_animation',
            description: '投げる際腕を振るかどうか。デフォルトでfalse。',
            type: 'boolean'
        },
        {
            name: 'launch_power_scale',
            description: '投げの威力が何倍になるか。デフォルトで1.0。',
            type: 'number'
        },
        {
            name: 'max_draw_duration',
            description: '最大チャージ時間。デフォルトでは0.0。',
            type: 'number'
        },
        {
            name: 'max_launch_power',
            description: '発射の最大パワー。デフォルトで1.0。',
            type: 'number'
        },
        {
            name: 'min_draw_duration',
            description: '投げるのに必要な最低チャージ時間。デフォルトで0.0。',
            type: 'number'
        },
        {
            name: 'scale_power_by_draw_duration',
            description: 'チャージ時間に応じて投げの威力が増加するかどうか。デフォルトでfalse。',
            type: 'boolean'
        }
    ],
    examples: [
        {
            id: 'example',
            code: `"minecraft:throwable": {
    "do_swing_animation": true,
    "launch_power_scale": 2.0,
    "max_draw_duration": 5.0,
    "max_launch_power": 10.0,
    "min_draw_duration": 1.0,
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