import prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';

export const codePrettier = (script) => {
    return prettier.format(script, { semi: false, parser: "babel", plugins: [parserBabel] });
}