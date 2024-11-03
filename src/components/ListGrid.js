import VerticalLine from "./VerticalLine";
import Link from "next/link";

/**
 * プロパティのリスト。
 * @param {string} title 
 * @param {{ name: string, path: string }[]} properties 
 * @param {string} basePath
 */
export default function ListGrid(title, properties, basePath = '') {

    return (
        <div>
            <h2>{title}</h2>
            <VerticalLine element={
                <div className="list-grid">
                    {properties.map((property, index) =>
                        <li key={String(index)} className="list-grid-item">
                            <Link href={basePath + property.path}>
                                {property.name}
                            </Link>
                        </li>
                    )}
                </div>
            } />
        </div>
    );

}