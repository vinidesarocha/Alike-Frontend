import React, { useCallback, useRef } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  Platform,
  TextInput,
  Alert,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import api from '../../../services/api';

import getValidationErrors from '../../../utils/getValidationErrors';

import signInBackground from '../../../assets/backgroundSignUp/backgroundSignUp.png';

import Input from '../../../components/Input';
import GoOn from '../../../components/GoOn';

import { Container, Background, Title } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const CreateAccount: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      try {
        /* zeramos os erros */
        formRef.current?.setErrors({});
        /* Criaremos um schema validar o nosso formulário */
        const schema = Yup.object().shape({
          name: Yup.string().required('Name obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('users', data);

        navigation.navigate('ProfileOne');
      } catch (err) {
        /* Utilizamos uma função de utils para pegar a mensagem dos nossos erros */
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }
        // console.log(data);
        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao fazer o cadastro, tente novamente.'
        );
      }
    },
    [navigation]
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Background source={signInBackground}>
            <Container>
              <View style={{ width: '100%' }}>
                <Title>Crie sua{'\n'}conta!</Title>
              </View>

              <Form
                ref={formRef}
                style={{ width: '100%' }}
                onSubmit={handleSignUp}
              >
                <Input
                  autoCapitalize="words"
                  name="name"
                  icon="user"
                  placeholder="Nome"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    emailInputRef.current?.focus();
                  }}
                />

                <Input
                  ref={emailInputRef}
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  name="email"
                  icon="mail"
                  placeholder="E-mail"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    passwordInputRef.current?.focus();
                  }}
                />
                <Input
                  ref={passwordInputRef}
                  returnKeyType="send"
                  secureTextEntry
                  name="password"
                  icon="lock"
                  placeholder="Senha"
                  onSubmitEditing={() => {
                    formRef.current?.submitForm();
                  }}
                />
              </Form>

              <GoOn
                style={{ flex: 1, paddingTop: '22%' }}
                formRef={formRef}
                name="Sign Up"
              />
            </Container>
          </Background>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default CreateAccount;
