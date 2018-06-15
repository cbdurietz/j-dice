interface IDicePool {
	dice: Die[];
	result: number[] | null;
	sum: number | null;
	Add(dice: Die[]): void;
	Roll(): number;
}

class DicePool implements IDicePool {
	_dice: Die[];
	_result: number[];
	_sum: number | null;
	constructor() {
		this._dice = [];
		this._result = [];
		this._sum = null;
		console.log("Created an empty dice pool.");
	}
	public get dice(): Die[] { return this._dice; }
	public set dice(v: Die[]) { this._dice = v; }
	public get result(): number[] | null {
		let result: number[] = [];
		this._dice.forEach(x => {
			result.push(x._result ? x._result : 0);
		});
		return result;
	}
	public get sum(): number | null { return this._sum; }

	Add(dice: Die[]): void {
		console.log(`dice is typeof ${typeof dice}.`);
		console.log("Adding an array of dice.");
		dice.forEach(x => {
			this._dice.push(x);
		});
	}
	Roll(): number {
		let sum: number = 0;

		this.dice.forEach(x => {
			console.log("This is inside the arrow function.");
			console.log(x);
			sum += x.Roll(); //This doesn't seem to work. "Uncaught TypeError: x.Roll is not a function"
		});
		this._sum = sum;
		return this._sum;
	}
}