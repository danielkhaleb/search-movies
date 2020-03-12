import React from 'react';
import {withRouter} from 'react-router-dom'

class TestRoute extends React.Component {

    componentDidMount() {
        alert("entrou no did mount")
    }

    goToHome() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div><h1>Teste de rota</h1>
                <div className="column column is-2">
                        <div className="space"></div>
                        <button onClick={this.goToHome.bind(this)}
                            className={`btn-search button is-primary`}>test route</button>
                    </div>
            </div>
            )
    }
}

export default withRouter(TestRoute)
