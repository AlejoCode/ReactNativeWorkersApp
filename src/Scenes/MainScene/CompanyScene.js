import React, { PureComponent } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView
} from 'react-native';

const styles = StyleSheet.create({
  containerBig: {
    flex: 1
  },
  containerSmall: {
    flexDirection: 'row',
    padding: 20
  },
  imageWrapper: {
    marginLeft: 20,
    borderRadius: 40,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.2)',
    width: 80,
    height: 80,
    overflow: 'hidden'
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain'
  },
  text: {
    flexDirection: 'column'
  },
  textName: {
    fontSize: 24
  },
  textEmail: {
    fontSize: 18
  }
});

export default class CompanyScene extends PureComponent {
  render() {
    //DONE todo: 2. would be really cool to show the company info here.
    // todo: 3. would be extra cool to show the employee list and make it navigate to that user on tap.
    const { navigation } = this.props;
    const company = navigation.getParam('company');
    return (
      <ScrollView>
      <View>
      <View style={styles.containerSmall}>
                    <View style={styles.text}>
                      <Text style={styles.textName}>{company.name}</Text>
                    </View>
                    <View style={[styles.imageWrapper, { borderColor: company.color }]}>
                      <Image style={styles.image} source={{uri: "https://unsplash.it//640/480" }} />
                    </View>
              </View>
        <View >
        </View>
        <View style={{backgroundColor: company.color}}>
          <Text style={{color: 'white'}}>
            {JSON.stringify (company)}
          </Text>
        </View>
      </View>
      </ScrollView>
    );
  }
}
