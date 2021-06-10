import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {getDataMovieAction} from './homeAction';

const HomePage = ({name, dataMovie, getDataMovieAction, isLoading}) => {
  const [nama, setNama] = useState();
  // console.log(dataMovie);
  return (
    <View>
      {isLoading && <ActivityIndicator size="small" color="black" />}
      <ScrollView horizontal>
        {dataMovie.map((e, i) => (
          <>
            {/* <Text key={i}>{e.original_title}</Text> */}
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/original${e.poster_path}`,
              }}
              style={{width: 100, height: 300, resizeMode: 'cover'}}
            />
          </>
        ))}
      </ScrollView>
      <TouchableOpacity onPress={() => getDataMovieAction()}>
        <Text style={{color: 'blue', textAlign: 'center'}}>AMBIL DATA</Text>
      </TouchableOpacity>
    </View>
    // <View>
    //   {isLoading && <ActivityIndicator size="small" color="black" />}
    //   <ScrollView horizontal>
    //     {dataMovie &&
    //       dataMovie.map((e, i) => (
    //         <>
    //           {/* <Image
    //             source={{
    //               uri: `https://image.tmdb.org/t/p/original${e.poster.path}`,
    //             }}
    //             style={{width: 100, height: 300, resizeMode: 'cover'}}
    //           /> */}
    //           <Text key={i}>{e.original_title}</Text>
    //         </>
    //       ))}
    //   </ScrollView>

    // </View>
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
