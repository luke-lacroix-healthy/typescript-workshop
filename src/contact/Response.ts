export interface Success {
  success: true;
  confirmation: string;
}

export interface Failure {
  success: false;
}

export interface WithError {
  error: Error;
}

export interface WithReason {
  reason: string;
}

export type Response = Success | (Failure & WithError) | (Failure & WithReason);
