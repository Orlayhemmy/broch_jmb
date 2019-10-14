import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Header, InputField, Buttons } from '../Common'

export default class Report extends Component {
  state = {
    fullname: '',
    email: '',
    phone: '',
    message: '',
    error: {}
  };

  validateEntry = () => {
    let error = {};

    Object.entries(this.state).forEach(entry => {      
      if (entry[0] !== 'error' && !entry[1]) {
        error = {...error, [entry[0]]: 'This field must not be blank'}
      }
      if (entry[0] === 'phone' && !/^[0-9]+$/.test(entry[1])) {
        error = {...error, phone: 'This field must only contain numbers'}
      }
    })

    this.setState({ error });
    return Object.keys(error).length < 1 ? true : false
  }

  sendMessage = () => {
    const isValid = this.validateEntry();
    console.log(isValid)
  };
  
  render() {
    const { fullname, email, phone, message, error } = this.state;
    console.log(this.state);
    
    return (
      <Fragment>
        <Header title="Complaints/Suggestions" />
        <View style={{flex: 1, backgroundColor: '#ffffff', margin: 30, opacity: .95}}>
          <View style={{flex: 1, margin: 50}}>
            <View style={{alignItems: 'center'}}>
              <Image source={require('../../image/paper-plane.png')}></Image>
            </View>
            <ScrollView style={{paddingBottom: 40}}>
              <InputField title="Fullname" value={fullname} handleChange={text => this.setState({ fullname: text})} err={error.fullname} />
              <InputField title="Phone Number" value={phone} handleChange={text => this.setState({ phone: text})} err={error.phone}/>
              <InputField title="Email Address" value={email} handleChange={text => this.setState({ email: text})} err={error.email}/>
              <InputField title="Message" isMultiline={true} value={message} handleChange={text => this.setState({ message: text})} err={error.message}/>
              <Buttons title="Send Message" click={this.sendMessage} />
            </ScrollView>
          </View>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  
})