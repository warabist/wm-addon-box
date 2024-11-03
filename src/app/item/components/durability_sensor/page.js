'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム durability_sensorコンポーネント';

const definition = PropertyDefinition({
    name: 'durability_sensor - 耐久センサー',
    description: 'アイテムの耐久値が減ったときに指定したパーティクルやサウンド等のエフェクトを発生させることができる。',
    type: 'object',
    properties: [
        {
            name: 'durability_thresholds [必須]',
            description: '発生させるエフェクト、条件のリスト。条件を通るオブジェクトが複数ある場合、durabilityの値が低いオブジェクトが優先される。',
            type: 'object[]',
            properties: [
                {
                    name: 'durability',
                    description: 'アイテムの耐久値がこのプロパティで指定した値以下になれば、このエフェクトは発生する。',
                    type: 'integer'
                },
                {
                    name: 'particle_type',
                    description: '発生させるパーティクルのID。',
                    type: 'string'
                },
                {
                    name: 'sound_event',
                    description: '再生するサウンドのID。',
                    type: 'string'
                }
            ]
        }
    ],
    examples: [
        {
            name: 'example',
            code: `"minecraft:durability_sensor": {
    "durability_thresholds": [
        {
            "durability": 1,
            "particle_type": "minecraft:huge_explosion_emitter"
            "sound_event": "random.explode"
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