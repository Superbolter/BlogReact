import React from 'react' ; 
// const API_URL = `http://localhost:8000/api/v1/articles`;
const API_URL = `https://react-blogapi.herokuapp.com/api/v1/articles`;
class Articles extends React.Component {
	state = {
	id: undefined,
    title: undefined,
    body: undefined,
    category: undefined,
    error: undefined,
    datas: []
  }

	addArticle = (e) => {
    	e.preventDefault();
    	this.refs.title.focus();
    	console.log(this.refs.title.value);
    	// this.setState({
    	// 	title: this.refs.title.value,
    	// 	body: this.refs.body.value
    	// })

		fetch(`${API_URL}`, {
		  method: "post",
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		  },

		  //make sure to serialize your JSON body
		  body: JSON.stringify({
		    title: this.refs.title.value,
		    body: this.refs.body.value
		  })
		})
		.then( (response) => { 
			this.refs.myform.reset();
		   //do something awesome that makes the world a better place
		});
	}

	deleteArticle = (obj) => {
		let articles = this.props.articles;
		articles.splice(obj,1);
		console.log(obj);
		this.setState({
    		articles: articles
    	});
    	console.log(this);
    	fetch(`${API_URL}/${obj.id}`, {
		  method: "delete",
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		  },
		})
		.then( (response) => { 
			// this.refs.myform.reset();
		   //do something awesome that makes the world a better place
		});
	}

 	render() {
 		let datas = this.props.articles;
 		return (
				<div className="container">
					<div className="row">
						<div className="col-md-8">
						<h1 className="my-4">Articles
							<small></small>
						</h1>
						{this.props.articles.map(obj => {
					    return (
					    	<div className="card mb-4">
					    		<img className="card-img-top" src="http://placehold.it/750x300" alt="Card image cap"/>
					    		<div className="card-body">
								    <h1 className="card-title">
								    	{obj.title}
								    </h1>
									<p className="card-text">{obj.body}</p>
									<a href="" className="btn btn-primary">Read More &rarr;</a>
									<button onClick= {()=> this.deleteArticle(obj)} className="btn btn-danger" type= "delete">Delete &rarr;</button>
					    		</div>
					        </div>
					        )
					    })}
					</div>
					<div className="col-md-4">
			          <div className="card my-4">
			            <h5 className="card-header">Add Articles</h5>
			            <div className="card-body">
			              <form ref="myform" onSubmit= {this.addArticle.bind(this)}>
							<input type="text" name= "title" ref="title" placeholder= "Title"/>
							<br/>
							<textarea rows="4" cols="30" type="text" name= "body" ref="body" placeholder= "Body"/>
							<button className="btn btn-primary">Add Article</button>
						</form>
			            </div>
			          </div>
			        </div>
			        </div>
				</div>
			
 		);
 	}
}

export default Articles;