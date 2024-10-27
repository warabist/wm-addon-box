/**
 * エレメントの左に線を入れて返す
 * @param {{ element: JSX.Element }} props
 * @returns {JSX.Element}
 */
export default function VerticalLine(props) {

    return (
        <div className="vertical-line"> {/**縦線*/}
            <div className="description"> {/**要素を右へ寄せる*/}
                {props.element}
            </div>
        </div>
    );

}