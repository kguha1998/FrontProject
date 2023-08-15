export interface ErrorState {
  error?: ErrorModel;
}

export interface ErrorModel {
  errorCode?: string;
  message: string;
}
