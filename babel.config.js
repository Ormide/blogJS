const presets = [
    [
        "@babel/preset-env",
        {
            useBuiltIns: "usage",
            debug: true,
            corejs: 3,
            targets: "defaults, not dead",
        },
    ],
];

module.exports = { presets };
