import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {connect, useSelector, useDispatch} from 'react-redux';

import Tombol from '../../components/Tombol';

// ACTION
import {actionLogin} from './actionLogin';

const Login = () => {
  const [name, setName] = useState();
  // console.log(reducerLogin);

  const dispatch = useDispatch();
  // ini useSelector buat ambil data ke reducer
  const reducerLogin = useSelector(state => state.reducerLogin);
  // console.log(reducerLogin);

  return (
    <View style={styles.container}>
      <Text>APLIKASI ANU</Text>
      <Text>{reducerLogin.name.toUpperCase()}</Text>
      <TextInput
        value={name}
        placeholder="Silahkan isi nama ya"
        onChangeText={text => setName(text)}
        style={styles.textInput}
        onBlur={() => dispatch(actionLogin(name))} //kalo abis ketik nama tanpa klik tombol login ny lgsg tab
      />
      {/* ini pake action tanpa usedispatch dan useselector */}
      {/* <Tombol text="LOGIN" action={() => actionLogin(name)} /> */}

      {/* ini action lgsg disini */}
      <Tombol text="LOGIN" action={() => dispatch(actionLogin(name))} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  textInput: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 20,
    padding: 5,
    marginVertical: 20,
  },
});

// kalo pake connect
// const mapStateToProps = state => ({
//   // reducerLogin: state.reducerLogin,
// });

// const mapDispatchToProps = {actionLogin};

// export default connect(mapStateToProps, mapDispatchToProps)(Login);

export default Login;
