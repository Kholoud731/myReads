module.exports ={
    presets: [
        [
            "@bable/preset-env",{
                tragets: {
                    node: "current",
                },
            },
        ],
        "@bable/preset-react",
        "@bable/preset-typescript",
    ]
}