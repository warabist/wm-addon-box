'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム recordコンポーネント';

const definition = <PropertyDefinition definition={{
    name: 'record - レコード',
    description: 'アイテムをレコードにする。',
    type: 'object',
    properties: [
        {
            name: 'comparator_signal',
            description: '使用するコンパレータの信号強度を1～13で指定する。',
            type: 'integer'
        },
        {
            name: 'duration',
            description: 'サウンドの再生時間。',
            type: 'number'
        },
        {
            name: 'sound_event',
            description: '再生するサウンドのID。',
            type: 'string'
        }
    ],
    examples: [
        {
            id: 'example',
            code: `"minecraft:record": {
    "comparator_signal": 10,
    "duration": 60,
    "sound_event": "record.otherside"
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