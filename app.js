let arr = ['A', 'B', 'C']
let name = "huazai"

ReactDOM.render( <
	ul className = "nav nav-tabs nav-stacked" > {
		arr.map((item, index) => < li key = {
			index
		} > < a href = "#" > {
			item
		} < /a></li > )
	} <
	/ul>,
	document.getElementById('app')
)
