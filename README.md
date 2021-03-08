# deno-wasm

All in all, this whole demo (excluding `wasm_exec.js`) is about 322 Bytes of code.

Hundreds of engineers have spent countless hours working on something that's almost indistinguishable from magic. Running a compiled code from Go inside JavaScript through [Deno](https://github.com/denoland/deno).

 All it takes is 322 Bytes to expose code from a different language inside a JavaScript runtime. (Let's not talk about the humongous size of the Go binary though. Just that has 2MB on its own.)

### Running
1. Create your Golang file. For the purpose of example there is `main.go`.
2. Run the build command to build the WAsm file.

```bash
> env GOOS=js GOARCH=wasm go build -o deno.wasm main.go 
```
3. Copy the `wasm_exec.js` file from GOROOT
```bash
> cp path/wasm_exec.js .
```
4. Create a JS file to import the package and run it. In this example it's `deno.js`
5. Run the program
```bash
> deno run --allow-read deno.js
# Hello from Deno! 🦕
```
