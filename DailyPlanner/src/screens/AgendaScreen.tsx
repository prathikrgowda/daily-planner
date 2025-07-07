import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStack';

type Navigation = NativeStackNavigationProp<RootStackParamList, 'Agenda'>;

export default function AgendaScreen() {
  const navigation = useNavigation<Navigation>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Agenda goes here ➡️</Text>
      <Button
        title="Add Task"
        onPress={() => navigation.navigate({ name: 'AddEdit', params: {} })}
      />
    </View>
  );
}
