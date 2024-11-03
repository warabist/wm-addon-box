'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム Aコンポーネント';

const definition = <PropertyDefinition definition={{
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
}} />;

export default function Page() {
    return (
        <div className="main-content">
            <title>{title}</title>
            {definition}
        </div>
    );
}