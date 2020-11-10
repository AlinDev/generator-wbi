import React      from 'react'
import {View,Text} from 'react-native'
import styles from './ls.style'

const Ls = ({route}) => {
const { nextAddress } = route?.params;
  return (
    <View style={styles.container}>
      <Text>Page : ls</Text>
    </View>
  )
}
export default Ls




