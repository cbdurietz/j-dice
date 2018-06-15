interface IDicePool {
	dice: Die[];
	result: number[] | null;
	sum: number | null;
	Add(dice: Die[]): void;
	Roll(): number;
}

class DicePool implements IDicePool {
	private lastResult: number[] = [];
	constructor(public dice: Die[] =[]) { }

	public get result(): number[] | null {
		return this.lastResult;
	}
	public get sum(): number | null { return this.lastResult.reduce((a, b) => a + b); }

	Add(dice: Die[]): void {
		dice.forEach(x => {
			this.dice.push(x);
		});
	}
	Roll(): number {
		this.lastResult = this.dice.map(die => die.Roll());
		return this.lastResult.reduce((a, b) => a + b);
	}
}