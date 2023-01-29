import '../App.css';
export default function Challenges() {
    const tempval = 50;
    return (<div>
        <main>
            <h1 className="Challenge header">
                Current Challenges Progress
            </h1>
            <article>
                <p>
                    Daily
                </p>
                <progress value={tempval} max="100"></progress>
                <p>
                    Weekly
                </p>
                <progress value={tempval} max="100"></progress>
                <p>
                    Monthly
                </p>
                <progress value={tempval} max="100"></progress>
                <p>
                    COMMUNITY
                </p>
                <progress value={tempval} max="100"></progress>


                <img src="/imgs/forest-trees-5075.svg" height="auto" alt="Trees">
                </img>
            </article>
            <div className="grid">
                <div>
                    <h3> Daily Challenge </h3>
                    
                    <img src="/imgs/johnny-automatic-running.svg" height="70%" width="70%" alt="Lightbulbs" />
                </div>
                <div>
                    <h3> Weekly Challenge </h3>
                </div>
                <div>
                    <h3> Monthly Challenge </h3>
                </div>
                <div>
                    <h3> Community Challenge </h3>
                    <img src="/imgs/green-foot-print.svg" height="70%" width="70%" alt="Gallon of Gas" />
                </div>
            </div>
        </main>
    </div>)
}

