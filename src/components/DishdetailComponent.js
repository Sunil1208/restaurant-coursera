import React from 'react';
import {Card, CardImg,CardText,CardBody, CardTitle} from 'reactstrap';

class DishDetail extends React.Component{
  

    renderComments(comments){
        if(comments!=null){ 
            return (
                <div>
                <h4>Comments</h4>
                {comments.map((value,index)=>{
                    return (
                    <li class = "list-unstyled">
                    {value.comment}
                    <br></br>
                    <br></br>
                    --{value.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(value.date)))}
                    <br></br>
                    <br></br>
                    </li>
                    )
                })  } 
                </div>
            )
                    
        }
        else
        {
            return(
                <div></div>
            )
        }
    }

    renderDish(dish){
        if(dish!=null){
        return(
            <Card>
                    <CardImg width="100%" src={dish.image} alt = {dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>            
                </Card>
        )
        }else{
            return(
                <div></div>
            )
        }
    }

    render(){
        console.log(`Checking the props received: ${this.props.comments}`)
            if(this.props.dish!=null){
                return(
                    <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.dish)}
                        </div>
                        <div className="col-12 col-md-5 m-1" >
                        {this.renderComments(this.props.dish.comments)}
                        </div>
                    </div>
                    </div>
                )
               
            }
            else
            {
                return(
                    <div></div>
                )
            }
    }
}

export default DishDetail;