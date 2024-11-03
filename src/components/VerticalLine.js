/**
 * エレメントの左に線を入れて返す
 * @param {Object} props
 * @param {JSX.Element} props.element
 * @returns {JSX.Element}
 */
export default function VerticalLine({ element }) {
    return (
        <div className="vertical-line"> {/**縦線*/}
            <div className="description"> {/**要素を右へ寄せる*/}
                {element}
            </div>
        </div>
    );
}