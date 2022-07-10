import fs from 'fs';

const saveDataJson = async function (data) {
    const strData = JSON.stringify(data);
    await fs.appendFile('./storage/storage.txt', ('\n' + strData), () => {
        return 1;
    });
}

const checkDataJson = async (data) => {
    await fs.readFile('./storage/storage.txt', (err, fileData) => {
        const strFileData = fileData.toString();
        if (strFileData.includes(data)) {
            return true;
        } else {
            return false;
        };
    });
};

export { saveDataJson, checkDataJson };