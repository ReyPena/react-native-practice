import { View, Text } from 'react-native';
import React, { Component } from 'react';
import axios from 'axios';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums/')
      .then((response) => {
        this.setState({ albums: response.data });
      });
  }

  render() {
    let content = null;
    console.log(this.state);
    if (this.state.albums.length === 0) {
      content = 'Loading';
    } else {
      content = 'hello';
    }
    return (
      <View>
        <Text>{ content }</Text>
      </View>
    );
  }
}

export default AlbumList;
