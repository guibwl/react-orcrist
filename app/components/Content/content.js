import React, { Component } from 'react';
import './Content.less';

class Content extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log('1', this.props);
        return (
            <div className={'content ' + this.props.type}>
                {this.props.children}
            </div>
        )
    }
}

export default Content
