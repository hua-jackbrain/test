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

/*

magnet:?xt=urn:btih:F1C937959C39816C13AC75B8C3E2B20B3E5F142E
magnet:?xt=urn:btih:4ED1BFA6A9611915C98090CB6F87499C1784FAC5
*/
