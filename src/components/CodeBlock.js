/**
 * コードブロック
 * @param {Object} props
 * @param {{ name: string, code: string }} props.data 
 */
export default function CodeBlock({ data }) {
    return (
        <div>

            {/**ボタン */}
            <button onClick={() => {
                //コードをコピーする
                const code = document.getElementById(data.name + "code");
                navigator.clipboard.writeText(code.textContent);

                //CopyをCopiedに変更
                const copyButton = document.getElementById(data.name + "copy-button");
                copyButton.innerHTML = 'Copied';

                //CopiedをCopyに直す
                setTimeout(() => {
                    copyButton.innerHTML = 'Copy';
                }, 1000);
            }}><a id={data.name + "copy-button"}>Copy</a></button>

            {/**コードブロック */}
            <pre><code id={data.name + "code"}>{data.code}</code></pre>

        </div>
    );
}