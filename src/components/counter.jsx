import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.value,
        tags: ['tag1', 'tag2', 'tag3', 'tag4']
    }

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    render() {
        return (
            <React.Fragment>
                {this.props.children}
                <span className={this.getCounterClasses()}>{this.formatCount()}</span>
                <button
                    onClick={this.handleIncrement}
                    className='btn btn-secondary btn-sm'>
                    Increment
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className='btn btn-secondary btn-danger btn-sm'>
                    Delete
                </button>
                {/* {this.renderTags()} */}
            </React.Fragment>
        );
    }

    handleIncrement = product => {
        console.log(product)
        this.setState({ value: this.state.value + 1 })
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags</p>
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    getCounterClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;