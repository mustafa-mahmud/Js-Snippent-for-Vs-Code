{
  "Fat Arrow Function": {
    "prefix": "ft",
    "body": "($1)=>{$2}",
    "description": "fat arrow function"
  },
  "React Element": {
    "prefix": "e",
    "body": "<$1 />",
    "description": "React Element"
  },
  "React Block Element": {
    "prefix": "fb",
    "body": "<$1>\n</$1>",
    "description": "React Block Element"
  },
  "React Fragment": {
    "prefix": "fr",
    "body": "<>\n $1 \n</>",
    "description": "React Fragment"
  },
  "React Inline Element": {
    "prefix": "fi",
    "body": "<$1></$1>",
    "description": "React Inline Element"
  },
  "Import": {
    "prefix": "import",
    "body": "import $2 from '$1';"
  },
  "Function": {
    "prefix": "fn",
    "body": "function $1($2){$3}"
  },
	"reactComponent": {
    "prefix": "rfc",
    "scope": "javascript,typescript,javascriptreact",
    "body": [
      "const ${TM_FILENAME_BASE}=()=> {",
			"\t///////////////////////////////////////////////////",
      "\treturn ${3:<h1>${TM_FILENAME_BASE}</h1>};",
      "}",
      "",
      "export default ${TM_FILENAME_BASE};",
    ],
    "description": "React component"
  },
  "reactStyledComponent": {
    "prefix": "rsc",
    "scope": "javascript,typescript,javascriptreact",
    "body": [
      "import styled from 'styled-components'",
      "",
      "const Styled${TM_FILENAME_BASE} = styled.$0``",
      "",
      "function ${TM_FILENAME_BASE}() {",
      "\treturn (",
      "\t\t<Styled${TM_FILENAME_BASE}>",
      "\t\t\t${TM_FILENAME_BASE}",
      "\t\t</Styled${TM_FILENAME_BASE}>",
      "\t)",
      "}",
      "",
      "export default ${TM_FILENAME_BASE}",
      ""
    ],
    "description": "React styled component"
  },
	"importCSSModule": {
    "prefix": "csm",
    "scope": "javascript,typescript,javascriptreact",
    "body": ["import styles from './${TM_FILENAME_BASE}.module.css'"],
    "description": "Import CSS Module as `styles`"
  },
}