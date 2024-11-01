'use client';
import PropertyDefinition from "@/components/PropertyDefinition";

const title = 'アイテム custom_componentsコンポーネント';

const definition = PropertyDefinition({
    name: 'custom_components - カスタムコンポーネント',
    description: 'ScriptAPIで読み込まれたカスタムコンポーネントを指定。1.21あたりのアップデートで消えたevent関係と同じような事ができる。',
    type: 'string[]',
    examples: [
        {
            name: 'example',
            code: `"minecraft:custom_components": [ "my_component:on_use" ]`
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