export interface Entry {
  userCode: string;
  dateEntry: string;
  hourEntry: string;
  id: number;
}

export interface Exit {
  userCode: string;
  dateExit: string;
  hourExit: string;
  id: number;
}
export interface UserHistory {
  userCode: string;
  dateEntry: string;
  dateExit: string;
  hourEntry: string;
  hourExit: string;
  workTime: string;
}
