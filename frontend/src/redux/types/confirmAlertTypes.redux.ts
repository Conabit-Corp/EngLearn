export interface ConfirmAlertState {
  open: boolean,
  title: string,
  description: string,
  disagreeButtonText: string,
  agreeButtonText: string,
  agreeFunction: Function | undefined,
  vlaueAgreeFunction: string,
}

export interface ConfirmAlertAction {
  type: string,
  title: string,
  description: string,
  disagreeButtonText: string,
  agreeButtonText: string,
  agreeFunction: Function,
  vlaueAgreeFunction: string,
}
