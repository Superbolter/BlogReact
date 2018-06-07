import React from 'react' ; 

class Articles extends React.Component {
 	render() {
 		return (
 				
				<div className="container">
					<div className="row">
						<div className="col-md-8">
						<h1 className="my-4">Articles
							<small>blogres</small>
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
									<a href="#" class="btn btn-primary">Read More &rarr;</a>
					    		</div>
					        </div>
					        )
					    })}
					</div>
				</div>
				</div>
			
 		);
 	}
}

export default Articles;