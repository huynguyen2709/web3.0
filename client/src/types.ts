export interface INavBarItemProps {
  title: string;
  classprops?: any;
}

export interface IInputProps {
  placeholder: string,
  name: string,
  type: string,
  value: string,
  handleChange: (e: any, name: string) => void
}

export interface IFormData {
  addressTo: string,
  amount: string,
  keyword: string,
  message: string
}