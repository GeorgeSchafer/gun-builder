import 'dotenv/config'
import { gun_parts } from './json/gun_parts.js'
import {
    Config as Configuration,
    Scene,
    View,
    Player,
    Typeface,
    Frame,
    SquareFrame,
    Img,
    SpriteSheet,
} from './PhaserHelpers/Constants.mjs'


let activeScene
let sceneA
let configure
let game
const assets = process.env.ASSETS
gun_parts.image = assets + gun_parts.image
console.log('gun-parts:\n', gun_parts)
const view = new View(512, 382)
const elements = {
    ASSET: new Img(assets + 'FILENAME')
}

const player = null

function preload() {
    activeScene = this
    for(let [key] of Object.entries(elements)){
        elements[key].preload(activeScene)
    }
}

function create() {
    elements.ASSET.create(activeScene, view.center().x, view.center())
}

function update() {  

}

sceneA = new Scene(preload, create, update)
configure = new Configuration(view, physics, sceneA)
game = new Phaser.Game(configure)

export {
    assets,
    gun_parts
}