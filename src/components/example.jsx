class Example extends Component {
 

    state = {
        value: 1,
        type: 2,
    }
  
    handleReset = () =>{
        const counters = this.state.counters.map(c =>{
            c.value=0;
            return c;
        });
        this.setState({counters});
    };
    render() {
        return (
            <div>
                <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.state.counters.map(counter => (counter))}

                {this.state.value}
                {this.state}

            </div>  
        );
    }
  }
  
  export default Counter;
  