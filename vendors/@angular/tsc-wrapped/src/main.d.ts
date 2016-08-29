import * as ts from 'typescript';
import NgOptions from './options';
export declare type CodegenExtension = (ngOptions: NgOptions, program: ts.Program, host: ts.CompilerHost) => Promise<void>;
export declare function main(project: string, basePath?: string, codegen?: CodegenExtension): Promise<any>;
