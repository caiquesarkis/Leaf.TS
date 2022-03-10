"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Components = exports.Entity = exports.Scene = void 0;
const Scene_1 = require("./core/Scene");
exports.Scene = Scene_1.default;
const Entity_1 = require("./core/Entity");
exports.Entity = Entity_1.default;
const Transform_1 = require("./components/Transform");
const Geometry_1 = require("./components/Geometry");
const Text_1 = require("./components/Text");
let Components = {
    'Transform': Transform_1.default,
    'Geometry': { 'Box2d': Geometry_1.Box2d },
    'Text': Text_1.default
};
exports.Components = Components;
