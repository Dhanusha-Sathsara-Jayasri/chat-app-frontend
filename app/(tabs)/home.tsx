import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={{fontSize: 18, marginLeft: 10}}>User Name</Text>
        <MaterialIcons
          style={{marginRight: 10}}
          name="notifications-none"
          size={22}
          color="#686868"
        />
      </View>

      <View style={styles.searchView}>
        <Ionicons name="search-outline" size={24} color="black" />
        <TextInput placeholder="Search" placeholderTextColor={'black'} />
      </View>

      <Pressable style={styles.chatView}>
        <Image
          style={styles.profileImage}
          source={require('../../assets/images/profile/default_profile_image.png')}
        />
        <View style={{gap: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 15}}>
            Dhanusha Sathsara
          </Text>
          <Text>Hello 😍</Text>
        </View>
        <Text style={styles.timeTxt}>15:00</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e5e1e1',
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  chatView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  timeTxt: {
    color: '#686868',
    fontSize: 12,
    justifyContent: 'flex-end',
    marginLeft: 'auto',
  },
});
