import * as React from 'react'
import {Editor} from 'slate-react'
import {Value} from 'slate'

import {ReactDnDPlugin} from "../../dist/index"

const initialValue = Value.fromJSON({
    document: {
        nodes: [
            {
                kind: 'block',
                type: 'paragraph',
                nodes: [
                    {
                        kind: 'text',
                        leaves: [
                            {
                                text: 'A line of text in a paragraph.'
                            }
                        ]
                    }
                ]
            }
        ]
    }
});

class ParagraphNode extends React.Component {
    render(){
        return (<p {...this.props.attributes} >{this.props.children}</p>)
    }
}

const dndPlugin = ReactDnDPlugin({
    renderNodeBlock: (props) => {
        switch (props.node.type) {
            case 'paragraph':
                return <ParagraphNode {...props} />;
            default:
                return null;
        }
    }
});

const plugins = [
   dndPlugin,
   ...dndPlugin.plugins
];

class StoryEditor extends React.Component {

    state = {
        value: initialValue
    };

    onChange({value}){
        this.setState({value})
    }

    render(){
        return (
            <Editor
                value={this.state.value}
                plugins={plugins}
                onChange={this.onChange.bind(this)}/>
        )
    }
}

export default StoryEditor;