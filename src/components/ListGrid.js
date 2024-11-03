import VerticalLine from "./VerticalLine";
import Link from "next/link";

/**
 * プロパティのリスト。
 * @param {Object} props
 * @param {string} props.title 
 * @param {{ name: string, path: string }[]} props.listItems
 * @param {string} props.basePath
 */
export default function ListGrid({ title, listItems, basePath = '' }) {
    return (
        <div>
            <h2>{title}</h2>
            <VerticalLine element={
                <div className="list-grid">
                    {listItems.map((listItem, index) =>
                        <li key={String(index)} className="list-grid-item">
                            <Link href={basePath + listItem.path}>
                                {listItem.name}
                            </Link>
                        </li>
                    )}
                </div>
            } />
        </div>
    );
}