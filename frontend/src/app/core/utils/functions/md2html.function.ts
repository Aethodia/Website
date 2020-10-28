import marked from 'marked';

////////////////////////////////////////////////////////////////////////////////
/** Converts markdown-formatted strings into html-formatted strings.
 * @param string The markdown-formatted string
 * @returns the input string formatted in html.
 */
export default function md2html(string: string): string {
    return marked(string, {
        breaks: true,
        gfm: true,
        headerIds: false,
        smartypants: true,
        xhtml: true,
    });
}
