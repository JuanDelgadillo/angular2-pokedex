import * as ts from 'typescript';
interface Options extends ts.CompilerOptions {
    genDir: string;
    basePath: string;
    skipMetadataEmit: boolean;
    skipTemplateCodegen: boolean;
    trace: boolean;
    debug?: boolean;
}
export default Options;
