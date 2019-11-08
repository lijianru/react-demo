import React, { Component } from 'react'

class Foo extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.name !== this.props.name
    }

    render() {
        console.log('Foo render')
        return (
            <div>Foo</div>
        )
    }
}

export default class Demo1 extends Component {
    state = {
        count: 0
    }
    render() {
        return (
            <div>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Click</button>
                <p>count: {this.state.count}</p>
                <Foo name={'XX'} />
            </div>
        )
    }
}
