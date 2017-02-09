import {AnimationCurve} from "AnimationCurve"

type AnimationCurveLinearOptions = {
	time: number
}

let AnimationCurveLinearDefaultOptions: AnimationCurveLinearOptions = {
	time: 1
}

export class AnimationCurveLinear extends AnimationCurve {

	private _options: AnimationCurveLinearOptions

	constructor(options=AnimationCurveLinearDefaultOptions) {
		super()

		this._options = Object.assign({}, options)
	}

	value(time: number) {
		return time / this._options.time
	}

	done(time: number) {
		// console.log(time, this._options.time, time >= this._options.time);

		return time >= this._options.time
	}

}