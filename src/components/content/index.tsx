import './style.css';


export function Content(props) {
    return (
        <div class="content">
            {
                (props.data as Array<any>).map((section) => {
                    return (
                        <div class="content-section">
                            <h2 class="section-title">{section.title.toUpperCase()}</h2>
                            <hr />
                            {section.text ? <p class="section-text">{section.text}</p> : null}
                            {
                                (section.items as Array<any>) ? 
                                    (section.items as Array<any>).map((item) => {
                                        return (
                                            <div class="section-item">
                                                <h3>{item.title}</h3>
                                                <h4>{item.subtitle}</h4>
                                                <p>{item.description}</p>
                                                <ul class="section-list">
                                                    {item.functions ? (item.functions as Array<string>).map((func) => {
                                                        return (
                                                            <li>{func}</li>
                                                        );
                                                    }): null}
                                                </ul>
                                            </div>
                                        )
                                    })
                                : null
                            }
                        </div>
                    ); 
                })
            }
                                            
                                                
        </div>
    );
}
