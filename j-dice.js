"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DicePool = /** @class */ (function () {
    function DicePool() {
        this._dice = [];
        this._result = [];
        this._sum = null;
        console.log("Created an empty dice pool.");
    }
    Object.defineProperty(DicePool.prototype, "dice", {
        get: function () { return this._dice; },
        set: function (v) { this._dice = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DicePool.prototype, "result", {
        get: function () {
            var result = [];
            this._dice.forEach(function (x) {
                result.push(x._result ? x._result : 0);
            });
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DicePool.prototype, "sum", {
        get: function () { return this._sum; },
        enumerable: true,
        configurable: true
    });
    DicePool.prototype.Add = function (dice) {
        var _this = this;
        console.log("dice is typeof " + typeof dice + ".");
        console.log("Adding an array of dice.");
        dice.forEach(function (x) {
            _this._dice.push(x);
        });
    };
    DicePool.prototype.Roll = function () {
        var sum = 0;
        /* 		for (let x in this.dice) {
                    console.log(x);
                    //sum += this.dice[x].Roll();
                }
         */
        this.dice.forEach(function (x) {
            console.log(x);
            //sum += this.dice[x].Roll();
        });
        this._sum = sum;
        return this._sum;
    };
    return DicePool;
}());
var Die = /** @class */ (function () {
    function Die(sides) {
        this._sides = sides;
        this._result = null;
    }
    Object.defineProperty(Die.prototype, "sides", {
        get: function () { return this._sides; },
        set: function (v) { this._sides = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Die.prototype, "result", {
        get: function () { return this._result; },
        enumerable: true,
        configurable: true
    });
    Die.prototype.Roll = function (sides) {
        if (sides) {
            this._sides = sides;
        }
        try {
            this._result = Math.floor(Math.random() * this._sides) + 1;
            console.log("I rolled " + this._result + " on a D" + this._sides + ".");
        }
        catch (error) {
            this._result = 0;
        }
        return this._result;
    };
    return Die;
}());
var D4 = /** @class */ (function (_super) {
    __extends(D4, _super);
    function D4() {
        return _super.call(this, 4) || this;
    }
    D4.prototype.Roll = function () {
        return _super.prototype.Roll.call(this);
    };
    return D4;
}(Die));
var D6 = /** @class */ (function (_super) {
    __extends(D6, _super);
    function D6() {
        return _super.call(this, 6) || this;
    }
    D6.prototype.Roll = function () {
        return _super.prototype.Roll.call(this);
    };
    return D6;
}(Die));
var D8 = /** @class */ (function (_super) {
    __extends(D8, _super);
    function D8() {
        return _super.call(this, 8) || this;
    }
    D8.prototype.Roll = function () {
        return _super.prototype.Roll.call(this);
    };
    return D8;
}(Die));
var D10 = /** @class */ (function (_super) {
    __extends(D10, _super);
    function D10() {
        return _super.call(this, 10) || this;
    }
    D10.prototype.Roll = function () {
        return _super.prototype.Roll.call(this);
    };
    return D10;
}(Die));
var D12 = /** @class */ (function (_super) {
    __extends(D12, _super);
    function D12() {
        return _super.call(this, 12) || this;
    }
    D12.prototype.Roll = function () {
        return _super.prototype.Roll.call(this);
    };
    return D12;
}(Die));
var D20 = /** @class */ (function (_super) {
    __extends(D20, _super);
    function D20() {
        return _super.call(this, 20) || this;
    }
    D20.prototype.Roll = function () {
        return _super.prototype.Roll.call(this);
    };
    return D20;
}(Die));
var D100 = /** @class */ (function (_super) {
    __extends(D100, _super);
    function D100() {
        return _super.call(this, 100) || this;
    }
    D100.prototype.Roll = function () {
        return _super.prototype.Roll.call(this);
    };
    return D100;
}(Die));
//# sourceMappingURL=j-dice.js.map