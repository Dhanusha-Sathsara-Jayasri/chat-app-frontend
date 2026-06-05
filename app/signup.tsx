import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {useRouter} from 'expo-router';
import {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  async function signupRequest() {
    if (
      firstName !== '' &&
      lastName !== '' &&
      mobile !== '' &&
      password !== ''
    ) {
      const data = {
        fname: firstName,
        lname: lastName,
        mobile: mobile,
        password: password,
      };

      try {
        const response = await fetch('http://10.28.78.229:3000/user/signup', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data),
        });

        const responseData = await response.json();
        alert(response.status + ' : ' + responseData.msg);
      } catch (error) {
        console.error('Error during signup:', error);
      }
    } else {
      alert('Please fill all the fields');
    }
  }

  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            gap: 18,
            padding: 20,
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/images/bg-signup.jpg')}
            style={styles.img}
          />

          <View style={styles.textView}>
            <Text style={styles.titleTxt}>Register</Text>
            <Text style={styles.descriptionTxt}>Please register to login.</Text>
          </View>

          <View style={styles.inputView}>
            <AntDesign name="user-add" size={20} color="#696969" />
            <TextInput
              style={styles.input}
              placeholder="Enter your First Name"
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>

          <View style={styles.inputView}>
            <AntDesign name="user-add" size={20} color="#696969" />
            <TextInput
              style={styles.input}
              placeholder="Enter your Last Name"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>

          <View style={styles.inputView}>
            <AntDesign name="user-add" size={20} color="#696969" />
            <TextInput
              style={styles.input}
              placeholder="Enter your Mobile"
              value={mobile}
              onChangeText={setMobile}
            />
          </View>

          <View style={styles.inputView}>
            <MaterialIcons name="lock-outline" size={22} color="#696969" />
            <TextInput
              style={styles.input}
              placeholder="Enter your Password"
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <Pressable
            style={styles.btn}
            onPress={() => {
              signupRequest();
            }}>
            <Text style={styles.btnTxt}>Sign Up</Text>
          </Pressable>

          <View style={{flexDirection: 'row', gap: 10}}>
            <Text style={{color: '#8b8b8b'}}>{"Don't have account?"}</Text>
            <Pressable
              style={{height: 30}}
              onPress={() => {
                router.back();
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>Sign In</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  descriptionTxt: {
    color: '#707070',
    marginTop: 5,
  },

  titleTxt: {
    fontWeight: 'bold',
    fontSize: 22,
  },

  textView: {
    alignItems: 'center',
    marginBottom: 20,
  },

  btnTxt: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#0066ff',
    borderRadius: 50,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  inputView: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    backgroundColor: '#ececec',
    borderRadius: 50,
    paddingHorizontal: 18,
    paddingVertical: 8,
    justifyContent: 'center',
    gap: 5,
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    gap: 18,
  },
  img: {
    width: '100%',
    height: 250,
  },
  input: {
    width: '90%',
    padding: 5,
  },
});
