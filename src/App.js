import React, { Component } from 'react';
import {connect} from 'react-redux';
import './styles/css/App.css';
import {stories} from './Containers/StoryList/StoryListActions';
import StoryList from './Containers/StoryList/StoryList';

class App extends Component {
  componentWillMount(){
      this.props.storyids();
  }
  render() {
    const {isPending,stories,error} = this.props;
    return (
      <div className="App">
        <header >
          <h1 >Y Combinator Articles</h1>
        </header>
        <StoryList stories={stories} />

      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
     stories: state.storyList.stories,
     isPending: state.storyList.isPending,
     error: state.storyList.error
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    storyids: ()=> dispatch(stories())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
