import { ScrollView, Text } from 'react-native';
import React, { Component } from 'react';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums/')
      .then((response) => {
        this.setState({ albums: response.data });
      });
  }

  renderAlbums() {
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    let content = null;
    console.log(this.state);
    if (this.state.albums.length === 0) {
      content = <Text>Loading</Text>;
    } else {
      content = this.renderAlbums();
    }

    return (
      <ScrollView>
        { content }
      </ScrollView>
    );
  }
}

export default AlbumList;
