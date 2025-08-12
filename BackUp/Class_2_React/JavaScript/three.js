state = { 'user':{'uid':101,'uname':'Rahul'},
           'product': {'pid':101,'pname':'Mercedes'}
}
let {product} = state;
let {pname} = product;
console.log(state.product.pname)
console.log(pname)