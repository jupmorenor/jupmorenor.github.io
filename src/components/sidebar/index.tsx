
import './style.css';

export function Sidebar(props) {
    return (
        <div class="sidebar">
            {
                (props.data as Array<any>).map((section) => {
                    return (
                        <div class="sidebar-section">
                            <h2 class="section-title">{section.title.toUpperCase()}</h2>
                            <hr />
                            {(section.items as Array<any>).map((item) => {
                                return (
                                    <p class="item">
                                        {item.icon ? <item.icon /> : null}
                                        {item.link ? <a target={"_blank"} rel={"noopener noreferrer"} href={item.link}>{item.text}</a> : item.text}
                                    </p>
                                );
                            })}
                        </div>
                    ); 
                })
            }
        </div>
     );
}
