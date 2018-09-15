// import everything as types
import * as types from './actionTypes';

// url
function url() {
  let url = 'https://api.system.snooze.com.au/bedbuilder/components';
  return url;
}

// obj becomes arr 
function buildArray(obj) {
	let arr = [];
	obj = obj['items'];

	Object.keys(obj).forEach((index) => {
		let item = obj[index];
		let obj1 = {};

		obj1.id = item.id; 	
		obj1.sku = item.sku;
		obj1.title = item.title;
		obj1.current_price = item.current_price;
		obj1.colour = item.colour;
		obj1.updated_at = item.updated_at;
		obj1.shopify_handle = item.shopify_handle;
		obj1.material = item.material;
			
		arr.push(obj1);
  	});

	// test
	//arr = arr.slice(0, 4);

	return arr;
}


// type + data 
export function bedListAction(data) {
  let obj = {type: types.BED_LIST, bedList: data};
  return obj;
}


// Remote fetch
export function bedList(colourFilter=null) {
	return dispatch => {
    	return fetch(url(), {
      		method: 'GET',
      		headers: {
        		'Accept': 'application/json'
      		}
    	})
    	.then((response) => {
      		let json = response.json();
      		return json;
    	})
    	.then((json) => {
      		let data = buildArray(json);
			let res;	
	
			if(colourFilter === null) {	
				// do nothing
				res = data;
			} else {
				res = data.filter((item) => {
					if(item['colour'] === colourFilter)
						return true;
					else
						return false;
				});
			}

      		dispatch(bedListAction(res));
    	});
	};
}

