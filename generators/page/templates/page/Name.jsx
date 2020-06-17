import React      from 'react'
import {View,Text} from 'react-native'
import styles from './<%= name %>.style'

const <%= Name %> = ({route}) => {
const { nextAddress } = route?.params;
  return (
    <View style={styles.container}>
      <Text>Page : Name</Text>
    </View>
  )
}
export default <%= Name %>




