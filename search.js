const search = function() {
	const input = document.querySelector('.search-block > input')
    const click = document.querySelector('.search-block > button')

    click.addEventListener('click', () => {
    	console.log(input.value);
    })
}

search()