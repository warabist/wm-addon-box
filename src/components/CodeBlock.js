/**
 * コードブロック
 * @param {Object} props
 * @param {string} props.id
 * @param {string} props.code
 */
export default function CodeBlock({ id, code }) {
    return (
        <div>

            {/**ボタン */}
            <button onClick={() => {
                //コードをコピー
                navigator.clipboard.writeText(code);

                //CopyをCopiedに変更
                const copyButton = document.getElementById(id + "-copy-button");
                copyButton.innerHTML = 'Copied';

                //CopiedをCopyに直す
                setTimeout(() => {
                    copyButton.innerHTML = 'Copy';
                }, 1000);
            }}><a id={id + "-copy-button"}>Copy</a></button>

            {/**コードブロック */}
            <pre><code>{code}</code></pre>

        </div>
    );
}