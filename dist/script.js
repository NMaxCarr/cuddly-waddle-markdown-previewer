import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const DEFAULT_TEXT =
"# Welcome to my React Markdown Previewer!\n## This is a sub-heading...\n### And heres some other cool stuff:\n There\'s also [links](https://www.freecodecamp.com) \nHeres some code, between 2 backticks.\n\
\`\`\`\n\
Code block\n\
\`\`\`\n\
\`Inline Code\`\n\
\n- And of course there are lists.\n- And of course there are lists.\n> Block Quotes!\n![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)\n**bold**";

const TextEditor = props => {
  return /*#__PURE__*/(
    React.createElement("div", { class: "textEditor" }, /*#__PURE__*/
    React.createElement("textarea", { id: "editor", onChange: event => props.onEntered(event.target.value) }, props.defaultText)));


};

const Previewer = props => {
  return /*#__PURE__*/(
    React.createElement("div", { class: "previewerWrap" }, /*#__PURE__*/
    React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(props.textDisplayed) } })));


};

const App = () => {
  const [textEntered, setTextEntered] = React.useState(DEFAULT_TEXT);

  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement(TextEditor, { onEntered: setTextEntered, defaultText: textEntered }), /*#__PURE__*/
    React.createElement(Previewer, { textDisplayed: textEntered })));


};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("main"));