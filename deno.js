import * as _ from './wasm_exec.js';

const go = new window.Go();
const file = await Deno.open('./deno.wasm');
const buf = await Deno.readAll(file);

const prog = await WebAssembly.instantiate(buf, go.importObject);
go.run(prog.instance);
