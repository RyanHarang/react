import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div>
                { /*<img src={this.state.imageUrl} alr=""></img>*/ }
                <span /*style={this.styles}*/ className={this.getBadgeClass()}>{this.formatCount()}</span>
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)} 
                    className='btn btn-secondary btn-sm'>
                    Increment
                </button>
                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id)} 
                    className='btn btn-danger btn-sm m-2'>
                    Delete
                </button>

                {/* {this.state.tags.length===0 && "Please create a new tag!"}
                {this.renderTags()} */}
            </div>
        );
    }

    getBadgeClass() {
        let classes = "badge m-2 ";
        classes += (this.props.counter.value === 0) ? "text-dark bg-warning" : "bg-primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;
        // could replace "Zero" with <h1>Zero</h1> to dispay an h1
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;