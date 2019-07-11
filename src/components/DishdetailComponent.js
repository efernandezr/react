import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



    function RenderDish({dish}) {
        if (dish != null)
            return(             
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    
    function RenderComments({comments}) {
        if(comments != null) {
            const dishComments = comments.map((comment) => {
                return (
                 
                 <ul class = "list-unstyled">
                    <li>{comment.comment}</li>
                    <li>-- {comment.author} {comment.date.substr(0, 10)}</li>

                </ul>
                );
            })
            return(
                <div>
                    <h4>Comments</h4>
                    {dishComments}
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
}


const  DishDetail = (props) => {

      if (props.dish != null){
            return ( 
                <div className= "container">
                    <div className="row">
                        <div  className="col-12 col-md-5 m-1">
                        <RenderDish dish = {props.dish}/>
                        </div>
                        <div  className="col-12 col-md-5 m-1">
                        <RenderComments comments= {props.dish.comments}/>
                        </div>
                    </div>
                </div>
            );
         } else{
            return(
                <div></div>
            );
        }
}

export default DishDetail;