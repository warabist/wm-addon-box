'use client';

import PropertyDefinition from "@/components/PropertyDefinition";

export default function Page() {

    return (
        <div className="main-content">
            <title>アイテム/コンポーネント/</title>
            {PropertyDefinition({
                name: '',
                description: '',
                type: '',
                properties: [],
                examples: [
                    {
                        name: 'example',
                        code: ``
                    }
                ]
            })}
        </div>
    );

}