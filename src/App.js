import React from 'react';
import MonacoEditor from 'react-monaco-editor';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '// type your code...',
      width: '0',
      height: '0'
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  editorDidMount(editor, monaco) {
    //console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange(newValue, e) {
    //console.log('onChange', newValue, e);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  componentDidMount() {
    this.updateWindowDimensions();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true,
      roundedSelection: false,
      readOnly: false,
      cursorStyle: 'line',
      automaticLayout: false,
    };
    return (
      <MonacoEditor
        height={this.state.height + 'px'}
        language="javascript"
        value={code}
        theme="vs-dark"
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
    );
  }
}

export default App;