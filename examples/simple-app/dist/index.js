"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("project-id-core/src");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        var _a;
        // Menambahkan pemeriksaan untuk null pada this.props
        return (0, src_1.createElement)('div', {}, "Hello, ".concat((_a = this.props) === null || _a === void 0 ? void 0 : _a.name, "!"));
    };
    return App;
}(src_1.Component));
var element = (0, src_1.createElement)(App, { name: 'World' });
// Menambahkan pemeriksaan null untuk document.getElementById('root')
var rootElement = document.getElementById('root');
if (rootElement) {
    (0, src_1.render)(element, rootElement);
}
else {
    console.error('Root element not found');
}
