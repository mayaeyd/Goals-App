import {useState} from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible]=useState(false);
  const [goalsList, setGoalsList]=useState([]);

  function startHandleAddGoal(){
    setModalIsVisible(true);
  }

  function endHandleAddGoal(){
    setModalIsVisible(false);
  }

  function handleAddGoal(enteredGoalText){
    setGoalsList(prevGoals => 
       [
        ...prevGoals,
        {text: enteredGoalText, id: Math.random().toString()},
      ]);
    endHandleAddGoal();
  }

  function deleteGoal(id){
    setGoalsList(prevGoals =>{ 
    return prevGoals.filter(goal => goal.id !== id);
  });
  }


  return (
    <>
    <StatusBar style='light' />
    <View style={styles.container}>
        <Button 
          title='Add New Goal' 
          color="#a065ec" 
          onPress={startHandleAddGoal}
        />
        <GoalInput 
          visible={modalIsVisible} 
          hAddGoal={handleAddGoal} 
          endModal={endHandleAddGoal}
        />
        <View style={styles.goalsContainer}>
          <FlatList 
            data={goalsList} 
            alwaysBounceVertical='true'
            renderItem={itemData => {
              return <GoalItem 
                      text={itemData.item.text}
                      handleItemPress={deleteGoal}
                      id={itemData.item.id}
                      />;
            }} 
            keyExtractor={(item, index) => { //called to get a key out of every item which will then be attached to the item by FlatList
              return item.id;
            }} 
           />
           
        </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container :{
    paddingTop:50,
    paddingHorizontal: 16,
    flex:1,
    backgroundColor:'#1e085a'
  },
  goalsContainer: {
    flex: 5
  }
});

