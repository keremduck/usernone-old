import React from "react";
import '../css/Repo.css'
const css = {
        textDecoration: "none"
}
class App extends React.Component {
    constructor(props) {
        super(props);
   
        this.state = {
            items: [
                
            ],
            DataisLoaded: true
        };
    }
    

    componentDidMount() {
        setTimeout(() => {
        fetch("https://api.github.com/users/noneduck/repos")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                });
            })
        }, 100)    
    }

    render() {
        const { items } = this.state;
   
        return (
        <div className = "App2">
        {
    items.map((item) => (
        <>
            <div className="card" id="card" style={css}>
                    <a href="/"><h4 className="card-body mt-4">{item.name ? item.name : <h4>Error</h4>}</h4></a>
                <div className="card-body">
                <p className="card-text">{item.description ? item.description : <p>Not defined description</p>}</p>
                    <a className="card-link" href={item.svn_url}><i className="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </>
    ))
}
    </div>
    );
    }
}
   
export default App;