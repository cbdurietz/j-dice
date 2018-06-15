interface IDie {
	readonly sides: number;
	Roll(sides?: number): number;
}

abstract class Die implements IDie {
	readonly sides: number;

	constructor(sides: number) {
		this.sides = sides;
	}
	
	Roll(sides?: number): number {
		const result = Math.floor(Math.random() * this.sides) + 1;
		return result;
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