await Bun.build({
	entrypoints: ["index.ts"],
	outdir: "./",
	target: "node",
	root: "./",
	format: "esm",
});
