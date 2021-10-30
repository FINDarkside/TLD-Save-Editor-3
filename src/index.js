const lzf = require('lzfjs')
const fs = require('fs')

function decompressString(s) {
    return lzf.decompress(Buffer.from(s))
}

function compressString(s) {
    return lzf.compress(Buffer.from(s))
}

const buf = fs.readFileSync('C:/Users/FINDarkside/AppData/Local/Hinterland/TheLongDark/sandbox4')
const uncompressed = lzf.decompress(buf).toString()

fs.writeFileSync('./res.json', uncompressed)

const obj = JSON.parse(uncompressed)

const globalJson = decompressString(obj.m_Dict.global)
fs.writeFileSync('./global_original.json', globalJson)

const global = JSON.parse(globalJson)
const serializedGlobal = JSON.stringify(global)
fs.writeFileSync('./global_after.json', serializedGlobal)
console.log(globalJson === serializedGlobal)


obj.m_Dict.global = compressString(JSON.stringify(global))

const asd = JSON.stringify(obj)

console.log('asd')

