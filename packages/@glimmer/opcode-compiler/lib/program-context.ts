import {
  WholeProgramCompilationContext,
  CompileTimeResolverDelegate,
  CompileTimeHeap,
  CompileMode,
  STDLib,
} from '@glimmer/interfaces';
import { WriteOnlyConstants, CompileTimeHeapImpl } from '@glimmer/program';
import { compileStd } from './opcode-builder/helpers/stdlib';

export class ProgramCompilationContext implements WholeProgramCompilationContext {
  readonly constants = new WriteOnlyConstants();
  readonly resolverDelegate: CompileTimeResolverDelegate;
  readonly heap: CompileTimeHeap = new CompileTimeHeapImpl();
  readonly stdlib: STDLib;

  constructor(delegate: CompileTimeResolverDelegate, readonly mode: CompileMode) {
    this.resolverDelegate = delegate;
    this.stdlib = compileStd(this);
  }
}