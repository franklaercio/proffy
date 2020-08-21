import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7',
  },

  teacherList: {
    marginTop: -60,
  },

  searchForm: {
    marginBottom: 26,
  },

  label: {
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular'
  },

  input: {
    height: 52,
    backgroundColor: '#FFF',
    borderRadius: 9,
    justifyContent: 'center',
    paddingHorizontal: 17,
    marginTop: 5,
    marginBottom: 17,
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputBlock: {
    width: '48%',
  },

  submitButton: {
    backgroundColor: '#04d361',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textSubmitButton: {
    color: '#FFF',
    fontFamily: 'Archivo_700Bold',
    fontSize: 17,
  }
});

export default styles;