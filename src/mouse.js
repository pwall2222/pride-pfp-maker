class Mouse {
	drag = false;
	fn = () => undefined;
	constructor(element, fn) {
		this.fn = fn;
		this.element = element;
		element.addEventListener("mousedown", this.down.bind(this), false);
		document.addEventListener("mouseup", this.up.bind(this), false);
		document.addEventListener("mousemove", this.move.bind(this), false);
	}
	down(e) {
		this.drag = true;
		this.fn(e);
	}
	up() {
		this.drag = false;
	}
	move(e) {
		if (!this.drag) {
			return;
		}
		const rect = this.element.getBoundingClientRect();
		const offsetX = Math.max(0, Math.min(this.element.width - 1, (e.pageX - rect.left - document.documentElement.scrollLeft)));
		const offsetY = Math.max(0, Math.min(this.element.height - 1, (e.pageY - rect.top - document.documentElement.scrollTop)));
		this.fn(offsetX, offsetY);
	}
}
