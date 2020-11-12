const fs = require('fs').promises;
async function listFiles() {
    try {
        console.log(process.argv);
        let dir = process.argv[2] ?  process.argv[2] : '.';
        const files = await fs.readdir(dir);
        files.forEach(file => {
            console.log(file);
        });
    } catch (error) {
        console.error(error);
    }
}

listFiles();