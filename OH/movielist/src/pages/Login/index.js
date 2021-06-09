import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {loginAction} from './actionLogin';

const Login = ({loginAction, loginReducer}) => {
  const [nama, setNama] = useState();
  console.log(loginReducer);
  return (
    <View>
      <TextInput
        value={nama}
        placeholder="Isi nama disini"
        onChangeText={text => setNama(text)}
      />
      <TouchableOpacity onPress={() => loginAction(nama)}>
        <Text style={{color: 'blue'}}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => ({
  loginReducer: state.loginReducer,
});

const mapDispatchToProps = {
  loginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
