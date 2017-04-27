import React, { Component } from 'react';
import {
    TouchableOpacity,
    View
} from 'react-native';

import shallowCompare from 'react-addons-shallow-compare';

class Button extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    handlePress = (event) => {
        this.props.onPress(event);
    }
    render() {
        return (
            <View>
                <TouchableOpacity
                    style={this.props.style}
                    onPress={this.handlePress} >
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        {this.props.children}
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Button;
