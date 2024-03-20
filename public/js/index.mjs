import { assets } from './env.js'
import { gun_parts } from './json/gun_parts.js'
import {
    Config as Configuration,
    // Scene,
    View,
    Player,
    Typeface,
    Frame,
    SquareFrame,
    Img,
    SpriteSheet
} from './PhaserHelpers/Constants.mjs'


let activeScene
let sceneA
let configure
let game
gun_parts.image = assets + gun_parts.image
const view = new View(512, 382)
const elements = {
    gunParts: new SpriteSheet('gunParts', gun_parts.image, new Frame(32,64))
}

const player = null

function preload() {
    activeScene = this
    for(let [key] of Object.entries(elements)){
        elements[key].preload(activeScene)
    }
    // gunPartImg.preload(activeScene)
}

function create() {
    // activeScene = this
    elements.gunParts.create(activeScene, view.center().x, view.center())
    // gunPartImg.create(activeScene, view.center().x, view.center().y)
}

function update() {  

}

sceneA = {
    preload: preload,
    create: create,
    update: update
}

configure = new Configuration(view, null, sceneA)
game = new Phaser.Game(configure)

export {
    assets,
    gun_parts
}