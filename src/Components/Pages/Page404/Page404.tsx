import "./Page404.css";

function Page404(): JSX.Element {
    return (
        <div className="Page404">
			 <h1>404 Error: Page Not Found</h1>
            <p>Looks like you're lost in cyberspace!</p>
            <img src="https://media.giphy.com/media/3oz8xRF0v9WMAUVLNK/giphy.gif" alt="Lost in Space" />
            <p>Don't worry, we've dispatched our elite team of space cats to come rescue you!</p>
        </div>
    );
}

export default Page404;
