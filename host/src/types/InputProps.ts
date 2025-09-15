export default interface InputProps {
  labelHtmlFor: string;
  inputText: string;
  inputId: string;
  setInputText: (arg: string) => void;
  placeholder: string;
  dataCy?: string;
}
