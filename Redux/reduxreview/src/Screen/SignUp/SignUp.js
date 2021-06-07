import React, {useState, useEffect} from 'react';
import {SafeAreaView, TextInput, Button, Text} from 'react-native';
// import {useSelector} from 'react-redux';
import {connect} from 'react-redux';

import {
  changeEmailOnSignUp,
  changeSandiOnSignUp,
  changeNameOnSignUp,
} from './action';

function SignUp(props) {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [sandi, setSandi] = useState('');
  console.log(props);

  // const [nama, setNama] = useState('Hallo');

  // useEffect(() => {
  //   setNama('Hai');
  // }, []);

  // const myData = useSelector(state => state);
  // console.log(myData);

  return (
    <SafeAreaView>
      {/* <Text>
        {[myData.SignUp.username, myData.SignUp.password, myData.SignUp.email]}
      </Text>
      <Text>{nama}</Text> */}
      <TextInput placeholder="name" onChangeText={text => setNama(text)} />
      <TextInput placeholder="email" onChangeText={text => setEmail(text)} />
      <TextInput placeholder="password" onChangeText={text => setSandi(text)} />
      <Button
        onPress={() => {
          props.changeEmailOnSignUp(email);
          props.changeNameOnSignUp(nama);
          props.changeSandiOnSignUp(sandi);
        }}
        title="SIGN UP"
        color="blue"
      />
    </SafeAreaView>
  );
}
const mapStateToProps = state => ({
  SignUp: state.SignUp,
});

const mapDispatchToProps = {
  changeNameOnSignUp,
  changeEmailOnSignUp,
  changeSandiOnSignUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
