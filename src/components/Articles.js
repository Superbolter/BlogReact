import React from 'react' ; 

class Articles extends React.Component {
 	render() {
 		return (
 			<div>
				<h1 className = "title-container__title">Articles</h1>
				<h3 id= "daa"className = "title-container__subtitle">List</h3>
				<p>title:{this.props.title}</p>
				<p>body:{this.props.body}</p>
				<form onSubmit = {this.getArticels}>
					<button> getArticels</button>
				</form>
			</div>
 		);
 	}
}


export default Articles;