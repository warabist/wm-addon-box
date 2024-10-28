import VerticalLine from "./VerticalLine";
import Link from "next/link";

/**
 * プロパティのリスト。
 * @param {string} title 
 * @param {{ name: string, path: string }[]} properties 
 * @param {string} basePath
 */
export default function PropertyList(title, properties, basePath = '') {

    return (
        <div>
            <h2>{title}</h2>
            <VerticalLine element={
                <div className="property-grid">
                    {properties.map((property, index) =>
                        <Link className="property-grid-item" href={basePath + property.path} key={String(index)}>
                            <li>{property.name}</li>
                        </Link>
                    )}
                </div>
            } />
        </div>
    );

}