import React, { useState, useEffect } from "react";
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity, Button,
} from 'react-native';

import Dialog from "react-native-dialog";

// import Button from "../components/Button";

export default function ReimbursementCreateScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [dialogVisible, setDialogVisible] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState('');
  const [subject, setSubject] = useState('');
  const [amount, setAmount] = useState('');

  const showDialog = () => {
    setDialogVisible(true);
  };

  const handleOK = () => {
    // OKボタンが押されたときの処理
    console.log('Selected Person:', selectedPerson);
    console.log('Subject:', subject);
    console.log('Amount:', amount);
    setDialogVisible(false);
  };

  const handleCancel = () => {
    // キャンセルボタンが押されたときの処理
    setDialogVisible(false);
  };

  useEffect(() => {
    // ページが読み込まれた後に実行したい関数をここに記述
    showDialog();
    // 他の処理を実行したい場合は、ここに記述
  }, []);

  return (
    <View style={styles.container}>

      {/* <View style={styles.inner}>
        <Text style={styles.title}>
          支払ったものを
          {'\n'}
          入力してください
        </Text>

        <View>
          <Text style={styles.label}>立て替え者</Text>
          <View style={styles.inputDoubleContainer}>
            <TextInput
              style={[styles.inputDouble, styles.inputDoubleTop]}
              value={email}
              onChangeText={(text) => { setEmail(text); }}
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <TextInput
              style={styles.inputDouble}
              value={email}
              onChangeText={(text) => { setEmail(text); }}
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
          </View>
        </View>

        <View>
          <Text style={styles.label}>件名</Text>
          <TextInput
            style={styles.input}
          />
        </View>

        <View>
          <Text style={styles.label}>金額</Text>
          <TextInput
            style={styles.input}
          />
        </View>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonLabel}>割り勘</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.label}>立て替え日</Text>
          <View style={styles.reimbursementDateContainer}>
            <Text style={styles.reimbursementDateText}>2023/05/28</Text>
          </View>
        </View>
      </View> */}

      <View>
        {/* <Button title="Open Dialog" onPress={showDialog} /> */}
        <Dialog.Container
          visible={dialogVisible}
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
      </View>
    </View>

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
