# deno-wasm

Why is this so easy? Hundreds of engineers have spent countless hours so we can even do this. This is nothing but amazing.

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
