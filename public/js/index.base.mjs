import {
    Config,
    Scene,
    View,
    Player,
    Typeface,
    Frame,
    SquareFrame,
    Img,
    SpriteSheet,
} from '../Constants.mjs'
import {
    Platform,
    physics,
} from '../Platformer/index.mjs'


let activeScene
let sceneA
let config
let game
const assets = '../js/assets/'
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
config = new Config(view, physics, sceneA)
game = new Phaser.Game(config)