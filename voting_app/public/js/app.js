// Parent Component
class ProductList extends React.Component {

    // Not needed since we've declared the handleProductUpVote() as an arrow function
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         products: [],
    //     };

    //     this.handleProductUpVote = this.handleProductUpVote.bind(this);
    // }

    // We have now defined the initial state like this:
    state = {
        products: [],
    };

    componentDidMount(){
        this.setState({ products: Seed.products })
    }

    handleProductUpVote = (productId) => {
        const nextProducts = this.state.products.map((product) => { // NB: map() returns a new array, so no array is modified
            if (product.id === productId) {
                return Object.assign({}, product, {  // Object.assign() is used a lot to avaoid mutating objects
                    votes: product.votes + 1,
                });
            } else {
                return product;
            }
        });
        this.setState({
            products: nextProducts, 
        });
    }

    render() {
        // ProductList is passing data/props by the expression below
        // Our Product child component can then use these props through the object "this.props"
        const products = this.state.products.sort((a, b) => (
            b.votes - a.votes
        ));

        const productComponents = products.map((product) => (
            <Product 
                key={'product-' + product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
                onVote={this.handleProductUpVote}
            />
        ));
        return (
            <div className='ui unstackable items'>
                {productComponents}
            </div>
        );
    }
}


// Child Component
class Product extends React.Component {

    // Not needed since we've declared the handleUpVote() as an arrow function
    // constructor(props) {
    //     super(props);

    //     this.handleUpVote = this.handleUpVote.bind(this);
    // }

    handleUpVote = () => {
        this.props.onVote(this.props.id);
    }

    render() {
        return (
            <div className='item'>
                {/* For every product, we will add an image, a title, a description,
                and an avatar of the post's author. */}
                <div className='image'>
                    <img src={this.props.productImageUrl} />
                </div> {/* end of DIV */}

                <div className='middle aligned content'>

                    <div className='header'>
                        <a onClick={this.handleUpVote}>
                            <i className='large caret up icon' />
                        </a>
                        {this.props.votes}
                    </div> {/* end of DIV */}

                    <div className='description'>
                        <a href={this.props.url}>{this.props.title}</a>
                        <p>{this.props.description}</p>
                    </div> {/* end of DIV */}

                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img className='ui avatar image' src={this.props.submitterAvatarUrl} />
                    </div> {/* end of DIV */}

                </div> {/* end of DIV */}

            </div> // end of main DIV
        );
    }
}


// Our React DOM Node Instruction
ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
  );