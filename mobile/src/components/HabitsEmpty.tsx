import { useNavigation } from '@react-navigation/native'
import { Text } from 'react-native'

export function HabitsEmpty() {
  const { navigate } = useNavigation()

  return (
    <Text className="text-zinc-400 text-base text-center">
      Você ainda não está monitorando nenhum hábito {' '}

      <Text
        className="text-green-400 text-base underline active:text-green-500"
        onPress={() => navigate('new')}
      >
        comece cadastrando um.
      </Text>
    </Text>
  )
}