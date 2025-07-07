import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AgendaScreen from '../screens/AgendaScreen';
import AddEditModal from '../screens/AddEditModal';

export type RootStackParamList = {
  Agenda: undefined;
  AddEdit: { taskId?: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Agenda"
        component={AgendaScreen}
        options={{ title: 'Today' }}
      />
      <Stack.Screen
        name="AddEdit"
        component={AddEditModal}
        options={{ presentation: 'modal', title: 'Task' }}
      />
    </Stack.Navigator>
  );
}
