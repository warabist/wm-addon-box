import VerticalLine from "./VerticalLine";
import CodeBlock from "./CodeBlock";
import parse from 'html-react-parser';
import { useState } from 'react';

/**
 * @typedef {Object} Definition
 * @property {string} name
 * @property {string} description
 * @property {string} type
 * @property {Definition[]} properties
 * @property {{ name: string, code: string }[]} examples
 */

/**
 * JSONの、プロパティに入る値の説明
 * @param {Object} props
 * @param {Definition} props.definition 
 * @param {boolean} props.isChild 
 */
export default function PropertyDefinition({ definition, isChild = false }) {

    const { name, description, type, properties, examples } = definition;

    return (
        <div>

            {isChild ? <h4>{name}</h4> : <h2>{name}</h2>}
            <VerticalLine element={
                <div>

                    {/**説明 */}
                    {
                        (description !== undefined) ? <p><span className="description-color">説明: </span>
                            {parse(description)}
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
                                {properties.map((property, index) => <div key={String(index)}><PropertyDefinition definition={property} isChild={true} /></div>)}
                            </div>
                        </details> : <div></div>
                    }


                    {/**例 */}
                    {
                        (examples !== undefined) ? <div>
                            <p><span className="example-color">例: </span></p>

                            {/**コード */}
                            {examples.map((example, index) =>
                                <div key={String(index)}><CodeBlock data={example} /></div>
                            )}
                        </div> : <div></div>
                    }

                </div>
            } />

        </div >
    );

}