
interface IDie {
	sides: number;
	result: number | null;
	Roll(sides?: number): number;
}

abstract class Die implements IDie {
	_sides: number;
	_result: number | null;
	constructor(sides: number) {
		this._sides = sides;
		this._result = null;
	}
	public set sides(v: number) { this._sides = v; }
	public get sides(): number { return this._sides }
	public get result(): number | null { return this._result; }
	Roll(sides?: number): number {
		if (sides) {
			this._sides = sides;
		}
		try {
			this._result = Math.floor(Math.random() * this._sides) + 1;
			console.log(`I rolled ${this._result} on a D${this._sides}.`);
		} catch (error) {
			this._result = 0;
		}
		return this._result;
	}
}

class D4 extends Die {
	constructor() { super(4); }
	Roll(): number {
		return super.Roll();
	}
}
class D6 extends Die {
	constructor() { super(6); }
	Roll(): number {
		return super.Roll();
	}
}
class D8 extends Die {
	constructor() { super(8); }
	Roll(): number {
		return super.Roll();
	}
}
class D10 extends Die {
	constructor() { super(10); }
	Roll(): number {
		return super.Roll();
	}
}
class D12 extends Die {
	constructor() { super(12); }
	Roll(): number {
		return super.Roll();
	}
}
class D20 extends Die {
	constructor() { super(20); }
	Roll(): number {
		return super.Roll();
	}
}
class D100 extends Die {
	constructor() { super(100); }
	Roll(): number {
		return super.Roll();
	}
}

