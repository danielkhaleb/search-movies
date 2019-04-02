import SearchInput from '../inputs/SearchInput';

class Home extends Component {
    constructor(param) {
        super(param)
    }

    componentDidMount() {

    }

    fetchData(query) {

    }

    queryChange(event) {
        this.setState({
            query: event.target.value
        });
    }

    getForKey(event) {
        if(event.key === 'Enter')
          return this.performSearch();
    }

    performSearch() {

    }

    performSearch() {
        const query = this.state.query;
        this.fetchData(query);
    }
  

    render() {
        return (
            <div className="column is-10 is-offset-1">
                <div className="columns">
                    <div className="column">
                        <FormSearchInput
                            label="Buscar"
                            placeholder="Título do filme"
                            onChange={this.queryChange.bind(this)}
                            onKeyPress={this.getForKey.bind(this)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}