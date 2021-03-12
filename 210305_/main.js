class AccordionWrap extends HTMLElement {
	constructor() {
		//필수
		super();

		//생성자의 일부로 사용자 정의 요소에 Shadow Dom을 연결
		this.attachShadow({mode: 'open'});

		this.shadowRoot.innerHTML = `
				<style>
					* {margin:0;padding:0;box-sizing: border-box;}
					dl {
						width:400px;
						border: 1px solid #ddd;
					}
					dt {
						padding: 10px;
						font-weight: 700;
						cursor:pointer;
					}
					dd {
						display: none;
						padding: 10px;
						color: #666;
						border-top: 1px dashed #ddd;
					}
				</style>

				<dl>
					<dt>
						<slot name="ttl"></slot>
					</dt>
					<dd>
						<slot name="txt"></slot>
					</dd>
					<dt>
						<slot name="ttl2"></slot>
					</dt>
					<dd>
						<slot name="txt2"></slot>
					</dd>
				</dl>
			`;

		let dtAction = this.shadowRoot.querySelectorAll('dt');
		for(let i = 0; i < dtAction.length; i++) {
			console.log(dtAction);
			dtAction[i].addEventListener('click', this.accorAction);
		}
	}

	accorAction() {
		let _nextDd = this.nextElementSibling;

		if (_nextDd.style.display === 'block') {
			_nextDd.style.display = 'none';
		} else {
			_nextDd.style.display = 'block';
		}
	}
}

customElements.define('accordion-wrap', AccordionWrap);