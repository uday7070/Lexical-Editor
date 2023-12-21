import { $getRoot, $getSelection } from "lexical";
import { useEffect, useState } from "react";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { MuiContentEditable, placeHolderSx } from "./Styles";
import { Box } from "@mui/material";
import Toolbar from "../toolbar/Toolbar";

import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { LexicalConfig } from "../config/LexicalConfig";

import AutoLinkPlugin from "../Plugin/AutoLinkPlugin";

function onChange(editorState) {
  editorState.read(() => {});
}

function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    editor.focus();
  }, [editor]);

  return null;
}

function Editor() {
  const [data, setData] = useState("");
  const handlechange = (e) => {
    setData(e);
  };
  return (
    <LexicalComposer initialConfig={LexicalConfig}>
      <Toolbar />
      <Box sx={{ position: "relative", background: "white", mt: 1 }}>
        <RichTextPlugin
          contentEditable={<MuiContentEditable />}
          placeholder={<Box sx={placeHolderSx}>Enter some text...</Box>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <OnChangePlugin onChange={onChange} />
        <HistoryPlugin />
        <MyCustomAutoFocusPlugin />
        <ListPlugin />
        <LinkPlugin />
        <AutoLinkPlugin onHtmlChanged={handlechange} initialHtml={data} />
      </Box>

      <Box sx={{ mt: 1, background: "black", color: "white", py: 2 }}>
        {data}
      </Box>
    </LexicalComposer>
  );
}
export default Editor;
