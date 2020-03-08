import React, { PureComponent } from 'react';
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import { ErrorScene, CompaniesList } from '../../components';

const styles = StyleSheet.create({
  containerBig: {
    flex: 1
  },
  containerSmall: {
    borderWidth: 1,

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

const query = gql`
  query Companies {
    companies {
      id
      name
      color
      image
      employees {
        name
        image
        id
        friends {
          name
          id
        }
      }
    }
  }
`;


export default class CompaniesScene extends PureComponent {
  render() {
    //DONE todo: 2. would be cool if we actually queried the graphql server for companies and displayed them here.
    const { navigation } = this.props;  
    return (
      <View style={styles.containerBig}>
        <Query query={query}>
          {({ loading, error, data }) => {
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error) {
              return <ErrorScene message={error.message} />;
            }

            return (
              <FlatList
                data={data.companies}
                renderItem={({ item, index }) => (
                  
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('CompanyScene', { company: item })
                    }
                  >
                  {/* <View style={styles.containerSmall}> */}
                  <View style={[styles.containerSmall, { borderColor: item.color }]}>

                    <View style={styles.text}>
                      <Text style={{...styles.textName, color: item.color}}>Company # {index}</Text>

                      <Text style={styles.textName}>{item.name}</Text>
                    </View>
                    {/* <View style={[styles.imageWrapper, { borderColor: item.color }]}>
                      <Image style={styles.image} source={{uri: "https://unsplash.it//640/480" }} />
                    </View> */}
                  </View>
                  </TouchableOpacity>
                )}
              />
            );
          }}
        </Query>
      </View>
    );
  }
}
