/* eslint-disable @typescript-eslint/no-explicit-any */
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

/* @ts-expect-error: Contentful rich text renderer types are not compatible with React */
const RichTextRenderer = ({ richTextDocument }) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: any) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text: any) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text: any) => <u>{text}</u>,
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (_node: any, children: any) => <h1>{children}</h1>,
      [BLOCKS.HEADING_2]: (_node: any, children: any) => <h2>{children}</h2>,
      [BLOCKS.PARAGRAPH]: (_node: any, children: any) => <p>{children}</p>,
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const { file, title } = node.data.target.fields;
        return <img src={file.url} alt={title} />;
      },
    },
  };

  return <div>{documentToReactComponents(richTextDocument, options)}</div>;
};

export default RichTextRenderer;
