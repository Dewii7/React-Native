import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {getDataMovieAction} from './homeAction';

const HomePage = ({name, dataMovie, getDataMovieAction, isLoading}) => {
  const [nama, setNama] = useState();
  // console.log(dataMovie);
  return (
    <View>
      <Text>Hallo nama saya {name}</Text>
      {isLoading && <ActivityIndicator size="small" color="black" />}
      {dataMovie.map((e, i) => (
        <Text key={i}>{e.original_title}</Text>
      ))}
      <TouchableOpacity onPress={() => getDataMovieAction()}>
        <Text style={{color: 'blue'}}>AMBIL DATA</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => ({
  name: state.loginReducer.name,
  dataMovie: state.homeReducer.data,
  isLoading: state.homeReducer.isLoading,
});

const mapDispatchToProps = {
  getDataMovieAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
