import Toast from 'react-native-toast-message';
import { Button ,StyleSheet} from 'react-native'

const CustomDialog = () => {
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋'
    });
  }
  return (
    <Button
      title='Show toast'
      onPress={showToast}
    />
  )
}

export default CustomDialog

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
      },
})