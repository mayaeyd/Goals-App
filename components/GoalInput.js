import { useState } from "react";
import {StyleSheet, View, TextInput, Button, Modal, Image} from "react-native";


function GoalInput(props) {
    const [enteredGoalText,setEnteredGoalText]=useState("");

    function handleGoalInput(enteredText){
        setEnteredGoalText(enteredText);
      }

    return(
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <Image style={styles.goalPic} source={require("../assets/images/goal.png")}/>
          <TextInput 
            onChangeText={handleGoalInput} 
            style={styles.textInput} 
            placeholder='What is your goal?'
            value={enteredGoalText}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
            <Button 
            title='Add Goal' 
            onPress={() => {
              props.hAddGoal(enteredGoalText);
              setEnteredGoalText('');
            }}
            color="#b180f0"
            />
            </View>
            <View style={styles.button}>
              <Button 
                title="Cancel" 
                onPress={props.endModal} 
                color="#f31282"
              />
            </View>
          </View>
          
        </View>
      </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor:"#e4d0ff",
        color: '#120438',
        borderRadius:6,
        width:'100%',
        padding: 16,
      },
      buttonContainer: {
        marginTop:16,
        flexDirection:'row',
      },
      button:{
        width:"30%",
        marginHorizontal:8
      },
      goalPic:{
        width:100,
        height:100,
        marginBottom:16,
        borderRadius:8
      }
});