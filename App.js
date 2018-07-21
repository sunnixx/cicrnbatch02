import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, AsyncStorage } from 'react-native';

import app from './API';

export default class extends Component {

  constructor(props) {
    super(props);
    this.data = ''; //Class variable in JavaScript

    this.state = { employee: [], dummy: true }

    this.handleData = this.handleData.bind(this);
    this.getData = this.getData.bind(this);
  }

  handleData() {
    app.handleData(this.data);
  }

  getData() {
    app.getData();
  }

  componentDidMount() {
    //This method runs after the render() method
    if (AsyncStorage.getItem !== null) {
      AsyncStorage.getItem('key:employee')
        .then(response => {
          this.state.employee.push(JSON.parse(response));
          this.setState({dummy: false})
        });
    }
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="Enter anything"
          style={{ width: '100%' }}
          onChangeText={(e) => { this.data = e }}
        />
        <TouchableOpacity
          onPress={this.handleData}
        >
          <Text>Click </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.getData}>
          <Text>CLICK FOR INFORMATION</Text>
        </TouchableOpacity>
        {this.state.employee.map((emp,index) => {
          return (
            <View key={"view" + index}>
              <Text key={"textname" + index}>{emp.employee.name}</Text>
              <Text key={"textdesignation" + index}>{emp.employee.designation}</Text>
            </View>
            )
        })}
      </View>
    )
  }
}
