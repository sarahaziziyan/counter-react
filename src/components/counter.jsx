import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: []
    }

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    render() {
        return (
            <React.Fragment>
                <span className={this.getCounterClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement({ id: 1 })} className='btn btn-secondary btn-sm'>Increment</button>
                {this.renderTags()}
            </React.Fragment>
        );
    }

    handleIncrement = product => {
        console.log(product)
        this.setState({ count: this.state.count + 1 })
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags</p>
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    getCounterClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;