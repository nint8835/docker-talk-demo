import * as os from "node:os";

const css = `
body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
        segoe ui, helvetica neue, Adwaita Sans, Cantarell, Ubuntu, roboto,
        noto, helvetica, arial, sans-serif;
    line-height: 1.5;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #333;
    color: #eee;
}

code {
    background-color: #222;
    padding: 0.2em 0.4em;
    border-radius: 4px;
}
`;

export const Home = () => {
	const hostname = os.hostname();
	const pid = process.pid;

	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<style>{css}</style>
				<title>Hello world!</title>
			</head>
			<body>
				<h1>Hello world!</h1>
				<div>
					This request was served by process <code>{pid}</code> on{" "}
					<code>{hostname}</code>
				</div>
			</body>
		</html>
	);
};
