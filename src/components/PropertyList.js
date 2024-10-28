import VerticalLine from "./VerticalLine";
import Link from "next/link";

/**
 * プロパティのリスト。
 * @param {string} title 
 * @param {{ name: string, path: string }[]} properties 
 */
export default function PropertyList(title, properties) {

    return (
        <div>
            <h2>{title}</h2>
            <VerticalLine element={
                <div className="property-grid">
                    {properties.map((property, index) =>
                        <Link className="property-grid-item" href={property.path} key={String(index)}>
                            <li>{property.name}</li>
                        </Link>
                    )}
                </div>
            } />
        </div>
    );

}