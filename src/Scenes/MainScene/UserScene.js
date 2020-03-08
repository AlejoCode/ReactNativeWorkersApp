import React, { PureComponent } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { ErrorScene, UserList } from '../../components';

export default class UserScene extends PureComponent {
  render() {
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    // todo DONE: 2. would be cool if we actually displayed full user data that is contained in the user data object.

    // todo: 3. would be extra cool to include their company info, and if you tap on it you can go that CompanyScene.
    // if this is done correctly, we should be re-using components from the CompaniesScene.

    // todo DONE: 4. would be even cooler to see a list of their friends, so I can tap on them an get more info about that user.
    // todo:  5 would be cool to make the user name and email updateable and saved ot the database, so we can let our users change their info.
    return (
      <ScrollView>
        <View>
          <View>
            <UserList user={user} />
          </View>
          <View style={{ backgroundColor: user.color }}>
            <Text style={{ color: 'white' }}>{JSON.stringify(user)}</Text>
          </View>
          <View>
            <Text
              style={{
                color: user.color,
                fontSize: 22,
                fontWeight: 'bold',
                marginLeft: 12,
                marginTop: 12
              }}
            >
              Friends
            </Text>
            <FlatList
              data={user.friends}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('UserScene', { user: item })
                  }
                >
                  <UserList user={item} />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
