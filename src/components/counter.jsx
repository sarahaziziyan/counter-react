import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.counter.value !== this.props.counter.value) {

            fetch("/myurl")
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            items: result.items
                        });
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )


            console.log("prevProps value differs from props value");
        }
    }

    componentWillUnmount() {
        console.log("Counter - UnMount");
    }

    render() {
        console.log("Counter - Rendered");
        return (
            <React.Fragment>
                {this.props.children}
                <span className={this.getCounterClasses()}>{this.formatCount()}</span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className='btn btn-secondary btn-sm'>
                    Increment
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className='btn btn-secondary btn-danger btn-sm'>
                    Delete
                </button>
            </React.Fragment>
        );
    }

    getCounterClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;