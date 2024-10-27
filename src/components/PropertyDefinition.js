import VerticalLine from "./VerticalLine";
import CodeBlock from "./CodeBlock";

/**
 * @typedef {Object} Definition
 * @property {string} name
 * @property {string} description
 * @property {string} type
 * @property {Definition[]} properties
 * @property {{ name: string, path: string }[]} examples
 */

/**
 * JSONのプロパティに入る値の説明
 * @param {Definition} definition 
 * @param {boolean} isChild 
 */
export default function PropertyDefinition(definition, isChild = false) {

    const { name, description, type, properties, examples } = definition;

    const propertyList = (properties !== undefined) ? properties.map((property, index) => <div key={String(index)}>{PropertyDefinition(property, true)}</div>) : 0;

    return (
        <div style={isChild ? {} : {
            margin: "30px"
        }}>

            {isChild ? <h4>{name}</h4> : <h2>{name}</h2>}
            <VerticalLine element={
                <div>

                    {/**説明 */}
                    {
                        (description !== undefined) ? <p><span className="description-color">説明: </span>
                            {description}
                        </p> : <div></div>
                    }

                    {/**型 */}
                    {
                        (type !== undefined) ? <p><span className="type-color">型: </span>
                            {type}
                        </p> : <div></div>
                    }

                    {/**プロパティ説明 */}
                    {
                        (properties !== undefined) ? <details>
                            <summary className="property-color">
                                {type.includes('object[]') ? 'アイテムプロパティ' : 'プロパティ'}
                            </summary>
                            <div className="description"> {/**子を右へ */}
                                {propertyList}
                            </div>
                        </details> : <div></div>
                    }


                    {/**例 */}
                    {
                        (examples !== undefined) ? <div>
                            <p><span className="example-color">例: </span></p>

                            {/**コード */}
                            {examples.map((example, index) =>
                                <div key={String(index)}>{CodeBlock(example)}</div>
                            )}
                        </div> : <div></div>
                    }

                </div>
            } />

        </div >
    );

}