import React, { useState, useEffect } from "react";
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity, Button,
} from 'react-native';

import Dialog from "react-native-dialog";

// import Button from "../components/Button";

export default function ReimbursementCreateScreen({ visible, onClose }) {
  const [selectedPerson, setSelectedPerson] = useState('');
  const [subject, setSubject] = useState('');
  const [amount, setAmount] = useState('');

  const handleOK = () => {
    // OKボタンが押されたときの処理
    console.log('Selected Person:', selectedPerson);
    console.log('Subject:', subject);
    console.log('Amount:', amount);
    onClose();
  };

  const handleCancel = () => {
    // キャンセルボタンが押されたときの処理
    onClose();
  };

  return (
    <Dialog.Container
      visible={visible}
      contentStyle={styles.inner}
    >
      <Dialog.Title style={styles.title}>
        支払ったものを
        {'\n'}
        入力してください
      </Dialog.Title>

      <Text style={styles.label}>立て替え者</Text>
      <View style={styles.inputDoubleContainer}>
        <View style={styles.inputDoubleBorder}>
          <TouchableOpacity style={styles.inputDoubleItem}>
            <Text style={styles.inputDoubleText}>川合真央</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.inputDoubleItem}>
          <Text style={styles.inputDoubleText}>河原悠真</Text>
        </TouchableOpacity>
        {/* <Dialog.Input
          wrapperStyle={styles.input}
          value={selectedPerson}
          onChangeText={(text) => setSelectedPerson(text)}
        /> */}
      </View>
      <Text style={styles.label}>件名</Text>
      <Dialog.Input
        placeholder="ランチ"
        style={styles.input}
        wrapperStyle={styles.inputContainer}
        value={subject}
        onChangeText={(text) => setSubject(text)}
      />

      <Text style={styles.label}>金額</Text>
      <Dialog.Input
        placeholder="1980円"
        style={styles.input}
        wrapperStyle={styles.inputContainer}
        value={amount}
        onChangeText={(text) => setAmount(text)}
      />
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonLabel}>割り勘</Text>
      </TouchableOpacity>

      <View>
        <Text style={styles.label}>立て替え日</Text>
        <View style={styles.reimbursementDateContainer}>
          <Text style={styles.reimbursementDateText}>2023/05/28</Text>
        </View>
      </View>
      <Dialog.Button label="キャンセル" onPress={handleCancel} />
      <Dialog.Button label="OK" onPress={handleOK} />
    </Dialog.Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  inner: {
    paddingHorizontal: 17,
    paddingTop: 16,
    width: 306,
    backgroundColor: '#F3F1F1',
    borderRadius: '10px',
    alignSelf: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: '20px',
    textAlign: 'center',
    fontWeight: '400',
  },
  label: {
    fontSize: '18px',
    marginBottom: 10,
  },
  inputDoubleContainer: {
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: '10px',
    marginBottom: 20,
  },
  inputDoubleItem: {
    height: 52,
  },
  inputDoubleText: {
    fontSize: '18px',
    textAlign: 'center',
    lineHeight: 52,
  },
  inputDoubleBorder: {
    borderBottomColor: '#BCBABA',
    borderBottomWidth: 1,
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 51,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 20,
    height: 51,
    width: '100%',
    alignSelf: 'center',
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: '#4946D1',
    width: 90,
    borderRadius: 8,
    marginBottom: 24,
    alignSelf: 'flex-end',
  },
  buttonLabel: {
    fontSize: 15,
    paddingVertical: 5,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },
  reimbursementDateContainer: {
    borderRadius: 8,
    backgroundColor: '#D9D9D9',
    width: 136,
    height: 35,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  reimbursementDateText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
