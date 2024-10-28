'use client';

import PropertyDefinition from "@/components/PropertyDefinition";

export default function Page() {

    return (
        <div className="main-content">
            <title>アイテム/コンポーネント/bundle_interaction</title>
            {PropertyDefinition({
                name: 'bundle_interaction - バンドルインタラクション',
                description: 'バンドルのようにインタラクトでアイテムを出せるようにする。storage_itemコンポーネントが必要。',
                type: 'object',
                properties: [
                    {
                        name: 'num_viewable_slots',
                        description: '表示できるスロットの数。1～64まで指定できる。デフォルトでは12。',
                        type: 'integer'
                    }
                ],
                examples: [
                    {
                        name: 'example',
                        code: `"minecraft:bundle_interaction": {
    "num_viewable_slots": 32
}`
                    }
                ]
            })}
        </div>
    );

}