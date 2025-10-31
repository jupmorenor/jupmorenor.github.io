import './style.css';


export function Header(props) {
    return (
        <header>
            <img src={props.data.photo} alt="Profile pic" />
            <div class={"title"}>
                <h1>{props.data.title}</h1>
                <h2>{props.data.subtitle}</h2>
            </div>
        </header>
    );
}
