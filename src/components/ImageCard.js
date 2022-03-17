import React from 'react';


class ImageCard extends React.Component{

    constructor(props){

        super(props);
        this.state = {spans:0};
        this.myRef = React.createRef();
    }
   
    componentDidMount(){
        this.myRef.current.addEventListener('load',this.setSnaps);
    }

    setSnaps = () =>{
        const height = this.myRef.current.clientHeight;

        const spans = Math.ceil(height/20)
        this.setState({spans})
    }

   render(){
    
    const {description, urls} = this.props.image; 

   return  <img style={{'gridRowEnd':`span ${this.state.spans}`}} ref = {this.myRef} src={urls.regular} alt={description}/>


    }
}
export default ImageCard;