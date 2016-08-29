import 'reflect-metadata';
import * as compiler from '@angular/compiler';
import * as ts from 'typescript';
import * as tsc from '@angular/tsc-wrapped';
import { CompileMetadataResolver, DirectiveNormalizer } from './compiler_private';
import { ReflectorHost, ReflectorHostContext } from './reflector_host';
import { StaticReflector } from './static_reflector';
export declare class Extractor {
    private program;
    host: ts.CompilerHost;
    private staticReflector;
    private messageBundle;
    private reflectorHost;
    private metadataResolver;
    private directiveNormalizer;
    private compiler;
    constructor(program: ts.Program, host: ts.CompilerHost, staticReflector: StaticReflector, messageBundle: compiler.i18n.MessageBundle, reflectorHost: ReflectorHost, metadataResolver: CompileMetadataResolver, directiveNormalizer: DirectiveNormalizer, compiler: compiler.OfflineCompiler);
    private readFileMetadata(absSourcePath);
    extract(): Promise<compiler.i18n.MessageBundle>;
    static create(options: tsc.AngularCompilerOptions, program: ts.Program, compilerHost: ts.CompilerHost, reflectorHostContext?: ReflectorHostContext): Extractor;
}
