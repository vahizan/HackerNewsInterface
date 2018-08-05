import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import {stories} from './Components/StoryList/StoryListActions';
import {StoryList} from './Components/StoryList/StoryList';

class App extends Component {
  componentWillMount(){
      this.props.stories();
  }
  render() {
    const {isPending,ids,error} = this.props;
    return (
      <div className="App">
        <header >
          <h1 >Y Combinator Articles</h1>
        </header>
        <StoryList stories={ids}/>

      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
     ids: state.storyList.ids,
     isPending: state.storyList.isPending,
     error: state.storyList.error
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    stories: ()=> dispatch(stories())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
