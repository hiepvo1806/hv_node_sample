const fs = require('fs').promises;
(async () =>  {
    console.log(process.argv);
    let dir = process.argv[2] ?  process.argv[2] : '.';
    const files = await fs.readdir(dir);
    files.forEach(file => {
        console.log(file);
    });
    throw new Error("Test err");
})().catch(console.error)
