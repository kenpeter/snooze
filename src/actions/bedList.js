// import everything as types
import * as types from './actionTypes';

// url
function url() {
  let url = 'https://api.system.snooze.com.au/bedbuilder/components';
  return url;
}

// obj becomes arr 
function buildArray(obj) {
  let outArr = [];
  Object.keys(obj).forEach((index) => {
    let item = obj[index];
    outArr.push(item);
  });

  return outArr;
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
				res = data[0];
			} else {
				res = data[0].filter((item) => {
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

